import { useEffect, useRef, useState, useCallback } from 'react';

interface Suggestion {
  place_id: string;
  description: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  dotColor?: string;
  className?: string;
}

// Photon-д хайлтыг Уппсала орчмын ойролцоох үр дүн дээр түлхүү харуулна
const UPPSALA_LAT = 59.8586;
const UPPSALA_LON = 17.6389;
const PHOTON_URL = 'https://photon.komoot.io/api/';

interface PhotonProps {
  osm_id?: number;
  osm_type?: string;
  name?: string;
  street?: string;
  housenumber?: string;
  postcode?: string;
  city?: string;
  country?: string;
  state?: string;
  type?: string;
}

interface PhotonFeature {
  geometry?: { coordinates?: [number, number] };
  properties: PhotonProps;
}

// Photon properties → Google "description" хэлбэртэй текст болгоно
function formatLabel(p: PhotonProps): string {
  const name = p.name || '';
  const street = p.housenumber && p.street ? `${p.street} ${p.housenumber}` : (p.street || '');
  const local = [p.postcode, p.city].filter(Boolean).join(' ');

  const segs: string[] = [];
  if (name) segs.push(name);
  if (street && street !== name) segs.push(street);
  if (local && local !== name && local !== street) segs.push(local);
  if (p.country && !segs.some(s => s.includes(p.country!))) {
    // зөвхөн Sweden биш үед нэмж харуулна
    if (p.country !== 'Sverige' && p.country !== 'Sweden') segs.push(p.country);
  }

  return segs.join(', ');
}

export default function PlacesAutocomplete({
  value,
  onChange,
  placeholder = 'Хаяг хайх...',
  dotColor = '#9ca3af',
  className = '',
}: Props) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const abortRef = useRef<AbortController | null>(null);

  // Цэвэрлэгээ: component unmount-д сүүлийн request-ийг цуцална
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      clearTimeout(debounceRef.current);
    };
  }, []);

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.trim().length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    // Өмнөх хүсэлт явж байгаа бол цуцална (race condition-оос хамгаална)
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      // Photon supports lang: de, en, fr, it (sv-г дэмждэггүй).
      // "default" — OSM-ийн орон нутгийн name (Швед-д шведээр гарна).
      const params = new URLSearchParams({
        q: input,
        lang: 'default',
        limit: '5',
        lat: String(UPPSALA_LAT),
        lon: String(UPPSALA_LON),
      });
      const res = await fetch(`${PHOTON_URL}?${params.toString()}`, {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Photon HTTP ${res.status}`);
      const data: { features?: PhotonFeature[] } = await res.json();

      const items: Suggestion[] = (data.features || [])
        .map((f, idx) => ({
          place_id: `${f.properties.osm_type ?? 'X'}${f.properties.osm_id ?? idx}`,
          description: formatLabel(f.properties),
        }))
        .filter(s => s.description);

      setSuggestions(items);
      setOpen(items.length > 0);
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        console.error('Photon autocomplete error:', e);
        setSuggestions([]);
        setOpen(false);
      }
    }
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(e.target.value), 300);
  };

  const handleSelect = (description: string) => {
    onChange(description);
    setSuggestions([]);
    setOpen(false);
  };

  const handleBlur = () => {
    // onMouseDown дуусахыг хүлээнэ
    setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Dot */}
      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: dotColor }} />

      {/* Input + dropdown */}
      <div className="flex-1 relative">
        <input
          type="text"
          value={value}
          onChange={handleInput}
          onBlur={handleBlur}
          onFocus={() => { if (suggestions.length > 0) setOpen(true); }}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full font-bold text-sm text-gray-900 placeholder:text-gray-400 placeholder:font-normal outline-none bg-transparent"
        />

        {open && suggestions.length > 0 && (
          <div className="absolute top-full left-[-52px] right-0 bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 z-[9999] overflow-hidden">
            {suggestions.map((s, i) => (
              <button
                key={s.place_id}
                type="button"
                onMouseDown={() => handleSelect(s.description)}
                className={`w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#fef9e7] hover:text-gray-900 transition-colors flex items-start gap-3 ${
                  i < suggestions.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <span className="text-gray-300 mt-0.5 flex-shrink-0">📍</span>
                <span className="leading-snug">{s.description}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
