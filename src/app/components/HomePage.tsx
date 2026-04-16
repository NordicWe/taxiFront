import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../../context/LanguageContext';
import imgBackground from "../../assets/background.png";
import imgBlackCopy34X1 from "figma:asset/5ebefb298d45f77f13c9f3c3d21fc45a4fcd64f7.png";
import imgCalendar2 from "figma:asset/71c8f9b1d75289bccd801730d48cdb10aa1d3ea0.png";
import imgUser2 from "figma:asset/8aa237a7f5aede14c1e28d9f958d1bdd0d9c5cd9.png";
import imgToddler2 from "figma:asset/813fe78407af17963e4b54add032c87b1900d292.png";
import imgPawprint2 from "figma:asset/560e216b22c0a68f1591edc5029f1d965aba8ba3.png";
import imgSweden1 from "figma:asset/854638555389ddcac54d066581f19318be52d6b1.png";
import imgImage3 from "figma:asset/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
import imgImage4 from "figma:asset/e38317241a37517e2bff1d220908366e55f1d508.png";
import imgPhoneCall1 from "figma:asset/1a67329c0c4e11529c60e156b41c100da977b790.png";
import imgGps11 from "figma:asset/6b04569393a3d13d496db99adbdb9b8f07dd8d75.png";
import imgEmail1 from "figma:asset/983082677ce2adf17214594f1b83e51d932a2242.png";
import imgBlackCopy24X1 from "figma:asset/3c567e19fb5378f6ac3879e4a5d32c0222721849.png";
import imgCar2 from "figma:asset/f8ff77d6247b49d7a0f7da10724acf94c9cebace.png";
import imgCar5 from "figma:asset/ec3d4b031d3633d9bfc6399a2acf969b9caaae31.png";
import imgUser12 from "figma:asset/ff85d0c52f1a84effb22fc31361c68690977a8a9.png";
import imgTimeLeft2 from "figma:asset/25722d3a34844e7fa0546a18766dfd34c494c807.png";
import { addBooking } from '../../utils/bookings';
import { loadGoogleMaps } from '../../utils/loadGoogleMaps';
import PlacesAutocomplete from '../../components/PlacesAutocomplete';

interface CarSize { passengers: number; label: string }

const carSizes: CarSize[] = [
  { passengers: 4, label: '4 Seats' },
  { passengers: 6, label: '6 Seats' },
  { passengers: 6, label: '6 Seats Bus' },
];

// ── Date helpers ────────────────────────────────────────────────────────────
function getDateForDay(key: string): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  const bump = (n: number) => { d.setDate(d.getDate() + n); return d; };
  if (key === 'tomorrow') return bump(1);
  if (key === 'monday')   return bump((1 - d.getDay() + 7) % 7 || 7);
  if (key === 'tuesday')  return bump((2 - d.getDay() + 7) % 7 || 7);
  return d; // today / later
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short' }); // "17 apr"
}

function buildDepartureTime(dayKey: string, time: string): string {
  const d = getDateForDay(dayKey);
  const label = d.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short', year: 'numeric' });
  return `${label} ${time}`; // "17 apr 2026 18:00"
}


export default function HomePage() {
  const { tr, lang, toggleLang } = useLang();

  const [showCarSizeModal, setShowCarSizeModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCarSize, setSelectedCarSize] = useState(0);
  const [from, setFrom] = useState('Uppsala');
  const [to, setTo] = useState('Arlanda Airport');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState(4);
  const [hasChild, setHasChild] = useState(false);
  const [hasPet, setHasPet] = useState(false);
  const [departureTime, setDepartureTime] = useState('now');
  const [selectedDay, setSelectedDay] = useState('today');
  const [selectedTime, setSelectedTime] = useState('18:00');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [mapsReady, setMapsReady] = useState(false);

  // Load Google Maps Places once
  useEffect(() => {
    loadGoogleMaps()
      .then(() => setMapsReady(true))
      .catch(() => setMapsReady(false));
  }, []);

  const swapRoute = () => {
    setFrom(to);
    setTo(from);
  };

  const handleCarSizeSelect = (index: number) => {
    setSelectedCarSize(index);
    setPassengers(carSizes[index].passengers);
    setShowCarSizeModal(false);
  };

  const handleBookNow = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert(lang === 'en'
        ? 'Please fill in your name, email and phone number.'
        : 'Vänligen fyll i ditt namn, e-post och telefonnummer.');
      return;
    }
    try {
      await addBooking({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        from,
        to,
        passengers,
        carSize: carSizes[selectedCarSize].label,
        hasChild,
        hasPet,
        departureTime: departureTime === 'now'
          ? new Date().toLocaleString('sv-SE', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
          : buildDepartureTime(selectedDay, selectedTime),
        price: passengers >= 5 ? 1095 : 595,
      });
      setBookingSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setTimeout(() => setBookingSuccess(false), 4000);
    } catch {
      alert(lang === 'en' ? 'Booking failed. Please try again.' : 'Bokning misslyckades. Försök igen.');
    }
  };

  const days = [
    { key: 'today',    label: tr.today,    date: fmtDate(getDateForDay('today')) },
    { key: 'tomorrow', label: tr.tomorrow, date: fmtDate(getDateForDay('tomorrow')) },
    { key: 'monday',   label: tr.monday,   date: fmtDate(getDateForDay('monday')) },
    { key: 'tuesday',  label: tr.tuesday,  date: fmtDate(getDateForDay('tuesday')) },
  ];

  return (
    <div className="bg-white relative min-h-screen font-['Rubik',sans-serif]">

      {/* ── Hero & Header ── */}
      <div className="relative overflow-visible">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img alt="Background" className="h-full w-full object-cover object-top" src={imgBackground} />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* ── Header ── */}
        <div className="relative z-20 px-4 sm:px-8 lg:px-[60px] py-4 flex items-center justify-between">
          <Link to="/">
            <img alt="Logo" className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] lg:h-[110px] lg:w-[110px] object-contain brightness-0 invert" src={imgBlackCopy34X1} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link to="/about" className="font-bold text-sm text-white hover:text-[#efbf04] transition-colors tracking-wide">
              {tr.aboutUs}
            </Link>
            <Link to="/price" className="font-bold text-sm text-white hover:text-[#efbf04] transition-colors tracking-wide">
              {tr.price}
            </Link>
            <Link to="/admin" className="font-bold text-sm text-white hover:text-[#efbf04] transition-colors tracking-wide">
              {tr.admin}
            </Link>
            <button className="bg-[#efbf04] h-[38px] rounded-full px-6 lg:px-7 font-bold text-sm text-white hover:bg-[#d9ab03] transition-all shadow-lg active:scale-95 tracking-wide">
              {tr.bookATaxi.toUpperCase()}
            </button>
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-white/30 hover:border-[#efbf04] transition-all group"
              title={lang === 'en' ? 'Switch to Swedish' : 'Byt till engelska'}
            >
              <img alt={lang === 'en' ? 'EN' : 'SV'} className="h-full w-full object-cover" src={imgSweden1} />
              <div className={`absolute inset-0 flex items-center justify-center text-[9px] font-black transition-all ${lang === 'en' ? 'bg-transparent' : 'bg-blue-700/80 text-white'}`}>
                {lang === 'sv' ? 'SV' : ''}
              </div>
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative z-30 md:hidden bg-black/80 backdrop-blur-md px-4 pb-4 space-y-2"
            >
              {[
                { to: '/about', label: tr.aboutUs },
                { to: '/price', label: tr.price },
                { to: '/admin', label: tr.admin },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 font-semibold text-white text-base border-b border-white/10 hover:text-[#efbf04] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <button className="flex-1 mr-3 bg-[#efbf04] h-[44px] rounded-xl font-bold text-base text-white hover:bg-[#d9ab03] transition-all">
                  {tr.bookATaxi.toUpperCase()}
                </button>
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-4 h-[44px] rounded-xl transition-all border border-white/20"
                >
                  <img alt="" className="h-5 w-5 rounded-full object-cover" src={imgSweden1} />
                  {lang === 'en' ? 'EN' : 'SV'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hero Text ── */}
        <div className="relative z-10 mt-6 md:mt-10 text-center px-4 pb-10">
          <h1 className="font-light text-3xl sm:text-4xl lg:text-[42px] text-white mb-8 md:mb-12 drop-shadow-md tracking-tight leading-tight">
            {tr.heroTitle}
          </h1>

          {/* ── Route Selector ── */}
          <div className="flex items-center justify-center max-w-[520px] mx-auto bg-white rounded-2xl shadow-xl overflow-visible">
            <div className="flex flex-col flex-1 divide-y divide-gray-100">
              {/* From */}
              <div className="h-[52px] flex items-center px-4">
                {mapsReady ? (
                  <PlacesAutocomplete
                    value={from}
                    onChange={setFrom}
                    placeholder="from..."
                    dotColor="#efbf04"
                    className="w-full"
                  />
                ) : (
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#efbf04] flex-shrink-0" />
                    <input
                      type="text"
                      value={from}
                      onChange={e => setFrom(e.target.value)}
                      placeholder="from..."
                      className="w-full font-bold text-sm text-gray-900 placeholder:text-gray-400 placeholder:font-normal outline-none bg-transparent"
                    />
                  </div>
                )}
              </div>
              {/* To */}
              <div className="h-[52px] flex items-center px-4">
                {mapsReady ? (
                  <PlacesAutocomplete
                    value={to}
                    onChange={setTo}
                    placeholder="To..."
                    dotColor="#9ca3af"
                    className="w-full"
                  />
                ) : (
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={to}
                      onChange={e => setTo(e.target.value)}
                      placeholder="to..."
                      className="w-full font-bold text-sm text-gray-900 placeholder:text-gray-400 placeholder:font-normal outline-none bg-transparent"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex flex-col items-center gap-2 px-2">
              <button
                onClick={swapRoute}
                className="w-9 h-9 rounded-full bg-[#efbf04] hover:bg-[#d9ab03] flex items-center justify-center transition-all active:scale-90 shadow-md"
                title={tr.swapRoute}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* Time */}
            <button
              onClick={() => setShowTimeModal(true)}
              className="flex flex-col items-center justify-center gap-1 h-full px-4 border-l border-gray-100 hover:bg-gray-50 transition-colors flex-shrink-0 min-w-[80px]"
            >
              <img alt="Calendar" className="h-4 w-4 opacity-40" src={imgCalendar2} />
              <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">
                {departureTime === 'now'
                  ? tr.travelNow
                  : <>{fmtDate(getDateForDay(selectedDay))}<br />{selectedTime}</>}
              </span>
            </button>
          </div>
        </div>

      </div>

      {/* ── Booking Card (hero-оос доор, тусдаа section) ── */}
      <div className="bg-gray-50 py-8 px-4 flex justify-center">
        <div className="bg-white rounded-[24px] w-full max-w-[460px] p-5 sm:p-6 shadow-xl border border-gray-100">

          <AnimatePresence>
            {bookingSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm font-medium flex items-center gap-2"
              >
                <span>✅</span> {tr.bookingSuccess}
              </motion.div>
            )}
          </AnimatePresence>

          <h2 className="text-lg font-bold text-gray-900 mb-4">{tr.bookingDetails}</h2>

          {/* Name, Email & Phone */}
          <div className="space-y-2.5 mb-5">
            <div className="border border-gray-200 focus-within:border-[#efbf04] focus-within:ring-1 focus-within:ring-[#efbf04]/30 rounded-xl h-[42px] px-4 flex items-center transition-all bg-gray-50/50">
              <input
                type="text"
                placeholder={tr.fullName}
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full font-medium text-sm text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
            <div className="border border-gray-200 focus-within:border-[#efbf04] focus-within:ring-1 focus-within:ring-[#efbf04]/30 rounded-xl h-[42px] px-4 flex items-center transition-all bg-gray-50/50">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full font-medium text-sm text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
            <div className="border border-gray-200 focus-within:border-[#efbf04] focus-within:ring-1 focus-within:ring-[#efbf04]/30 rounded-xl h-[42px] px-4 flex items-center transition-all bg-gray-50/50">
              <input
                type="tel"
                placeholder={tr.mobileNumber}
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full font-medium text-sm text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {/* Vehicle */}
            <button
              onClick={() => setShowCarSizeModal(true)}
              className="bg-[#efbf04] h-[68px] rounded-xl flex flex-col items-center justify-center hover:brightness-105 active:scale-95 transition-all text-white shadow-sm"
            >
              <div className="flex items-center gap-1 mb-1">
                <span className="text-lg font-bold leading-none">{passengers}</span>
                <img alt="" className="h-3.5 w-3.5 brightness-0 invert" src={imgUser2} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wide opacity-90">{carSizes[selectedCarSize].label}</span>
            </button>

            {/* Child Seat */}
            <button
              onClick={() => setHasChild(!hasChild)}
              className={`rounded-xl h-[68px] flex flex-col items-center justify-center gap-1.5 border-2 transition-all active:scale-95 ${
                hasChild ? 'bg-[#efbf04] border-[#efbf04] text-white' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
              }`}
            >
              <img alt="Child" className={`h-5 w-5 ${hasChild ? 'brightness-0 invert' : ''}`} src={imgToddler2} />
              <span className="text-[9px] font-bold uppercase tracking-wide">{tr.childSeat}</span>
            </button>

            {/* Pet */}
            <button
              onClick={() => setHasPet(!hasPet)}
              className={`rounded-xl h-[68px] flex flex-col items-center justify-center gap-1.5 border-2 transition-all active:scale-95 ${
                hasPet ? 'bg-[#efbf04] border-[#efbf04] text-white' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
              }`}
            >
              <img alt="Pet" className={`h-5 w-5 ${hasPet ? 'brightness-0 invert' : ''}`} src={imgPawprint2} />
              <span className="text-[9px] font-bold uppercase tracking-wide">{tr.petFriendly}</span>
            </button>
          </div>

          {/* Book Now */}
          <button
            onClick={handleBookNow}
            className="w-full bg-black text-white h-[48px] rounded-xl font-bold text-[15px] hover:bg-gray-800 active:scale-95 transition-all shadow-lg"
          >
            {tr.bookNow}
          </button>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="pt-10 pb-16 lg:pb-[100px] px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[140px]">
        <h1 className="font-bold text-[#efbf04] text-2xl sm:text-3xl lg:text-[40px] mb-5 leading-tight">
          {tr.homeH1}
        </h1>

        <div className="space-y-5 max-w-[820px] text-gray-700 text-base leading-relaxed">
          <p>{tr.homeP1}</p>
          <p>{tr.homeP2}</p>
          <p>{tr.homeP3}</p>
          <p className="text-gray-600 text-sm border-l-4 border-[#efbf04] pl-4 py-2 bg-[#efbf04]/5 rounded-r-xl">
            <strong>{tr.homeP4}</strong>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-[820px]">
          {[
            { icon: '🛡️', title: tr.feature1Title, desc: tr.feature1Desc },
            { icon: '💰', title: tr.feature2Title, desc: tr.feature2Desc },
            { icon: '⏰', title: tr.feature3Title, desc: tr.feature3Desc },
          ].map(card => (
            <div key={card.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t-[5px] border-black bg-[#efbf04]">
        <div className="h-0 border-t-[3px] border-black border-dashed" />
        <div className="px-4 sm:px-8 lg:px-[138px] py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <img alt="Nordic Uppsala Taxi" className="h-[130px] w-[130px] lg:h-[170px] lg:w-[170px] mb-5" src={imgBlackCopy24X1} />
              <p className="text-sm text-black leading-relaxed max-w-[240px]">{tr.footerDesc}</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-black mb-5 uppercase tracking-wide">{tr.sitelinks}</h3>
              <div className="space-y-3">
                {[
                  { to: '/about', label: tr.aboutUs },
                  { to: '/price', label: tr.price },
                  { to: '/', label: tr.bookATaxi },
                ].map(l => (
                  <Link key={l.to} to={l.to} className="block text-sm text-black hover:underline font-medium">{l.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base text-black mb-5 uppercase tracking-wide">{tr.contact}</h3>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-black">{tr.bookingHours}<br /><span className="font-normal text-black/70">{tr.monSun}</span></p>
                <div className="flex items-center gap-2.5">
                  <img alt="" className="h-5 w-5 flex-shrink-0" src={imgPhoneCall1} />
                  <span className="text-sm font-semibold text-black">018 800 50 50</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <img alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" src={imgGps11} />
                  <span className="text-sm text-black leading-relaxed">Murargatan 33, Uppsala<br />00:00 – 24/7</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <img alt="" className="h-5 w-5 flex-shrink-0" src={imgEmail1} />
                  <span className="text-sm text-black">Info@nordicnaw.se</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base text-black mb-5 uppercase tracking-wide">{tr.downloadApp}</h3>
              <p className="text-xs text-black/60 mb-4">{tr.swedish}</p>
              <img alt="App Store" className="h-[60px] w-[120px] mb-3 object-contain" src={imgImage3} />
              <img alt="Google Play" className="h-[35px] w-[115px] rounded-[5px] object-contain" src={imgImage4} />
            </div>
          </div>
        </div>
        <div className="border-t border-black py-4 px-4 sm:px-8 lg:px-[138px]">
          <div className="flex flex-wrap gap-3 justify-end text-sm">
            {[tr.travelTerms, tr.gdpr, tr.safety, tr.cookie].map((label, i, arr) => (
              <span key={label} className="flex items-center gap-3">
                <a href="#" className="text-black hover:underline font-medium">{label}</a>
                {i < arr.length - 1 && <span className="text-black/40">|</span>}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Car Size Modal ── */}
      <AnimatePresence>
        {showCarSizeModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/30 z-40" onClick={() => setShowCarSizeModal(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-32px)] max-w-[426px]"
            >
              <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl">
                <div className="bg-[#efbf04] h-[48px] flex items-center justify-center">
                  <p className="font-bold text-base text-white tracking-wide">{tr.selectVehicle}</p>
                </div>
                <div className="p-5 space-y-3">
                  {carSizes.map((car, index) => (
                    <button
                      key={index}
                      onClick={() => handleCarSizeSelect(index)}
                      className={`border rounded-[16px] h-[52px] w-full flex items-center px-6 gap-6 transition-all ${
                        index === selectedCarSize
                          ? 'bg-[#efbf04] border-[#efbf04]'
                          : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      <img alt="" className="h-8 w-8" src={index === 2 ? imgCar5 : imgCar2} />
                      <span className={`font-bold text-base flex-1 text-left ${index === selectedCarSize ? 'text-white' : 'text-gray-800'}`}>{car.label}</span>
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold text-lg ${index === selectedCarSize ? 'text-white' : 'text-gray-700'}`}>{car.passengers}</span>
                        <img alt="" className="h-5 w-5" src={imgUser12} />
                      </div>
                    </button>
                  ))}
                </div>
                <div className="px-5 pb-5 flex justify-end">
                  <button onClick={() => setShowCarSizeModal(false)} className="bg-[#efbf04] h-[40px] rounded-[16px] px-8 font-bold text-[15px] text-white hover:bg-[#d9ab03] transition-colors">
                    {tr.confirm}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Time Modal ── */}
      <AnimatePresence>
        {showTimeModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/30 z-40" onClick={() => setShowTimeModal(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-32px)] max-w-[420px]"
            >
              <div className="bg-white rounded-[24px] p-6 shadow-2xl">
                <p className="font-bold text-lg text-gray-900 text-center mb-6">{tr.selectDepartureTime}</p>
                <div className="flex bg-gray-100 rounded-xl p-1 mb-5 overflow-x-auto gap-1">
                  {days.map(d => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDay(d.key)}
                      className={`flex-1 min-w-[64px] h-auto py-1.5 px-2 rounded-lg font-semibold text-xs transition-all whitespace-nowrap leading-tight ${
                        selectedDay === d.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <span className="block">{d.label}</span>
                      <span className="block text-[10px] font-normal opacity-70">{d.date}</span>
                    </button>
                  ))}
                </div>
                <div className="border-2 border-gray-100 rounded-2xl h-[64px] mb-5 px-5 flex items-center gap-4 focus-within:border-[#efbf04] transition-colors">
                  <img alt="" className="h-8 w-8 flex-shrink-0" src={imgTimeLeft2} />
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={e => setSelectedTime(e.target.value)}
                    className="flex-1 font-bold text-4xl text-gray-800 outline-none bg-transparent"
                  />
                </div>
                <p className="text-xs text-gray-400 text-center mb-5">{tr.prebook}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => { setDepartureTime('now'); setShowTimeModal(false); }}
                    className="flex-1 border-2 border-gray-200 rounded-xl h-[44px] font-semibold text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    {tr.travelNow}
                  </button>
                  <button
                    onClick={() => { setDepartureTime('scheduled'); setShowTimeModal(false); }}
                    className="flex-1 bg-[#efbf04] rounded-xl h-[44px] font-bold text-sm text-white hover:bg-[#d9ab03] transition-all"
                  >
                    {tr.selectTime}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
