import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../../context/LanguageContext';

type FAQ = { q: string; a: string };
type Category = { id: string; icon: string; title: string; faqs: FAQ[] };

const categoriesSv: Category[] = [
  {
    id: 'booking',
    icon: '🚖',
    title: 'Bokning & Resor',
    faqs: [
      { q: 'Hur bokar jag en taxi?', a: 'Du kan boka direkt i chatten, via vår app eller genom att ringa oss på 018 800 50 50.' },
      { q: 'Hur bokar man Taxi Uppsala?', a: 'Du bokar enkelt taxi i Uppsala via vår hemsida eller genom att ringa 018 800 50 50.' },
      { q: 'Kan jag förboka en resa?', a: 'Ja, du kan boka din resa flera dagar i förväg.' },
      { q: 'Kan jag boka taxi åt någon annan?', a: 'Ja, ange passagerarens namn och telefonnummer vid bokning.' },
      { q: 'Kan jag välja vilken biltyp jag vill ha?', a: 'Ja, vi erbjuder flera alternativ som standardbil, storbil och premium.' },
      { q: 'Kan jag boka en returresa direkt?', a: 'Ja, du kan boka både fram- och returresa samtidigt.' },
      { q: 'Går det att resa med taxi om vi är fler än 4 personer?', a: 'Ja, det går oftast bra. Vi har 24 fordon som rymmer mellan 5 och 8 passagerare. Observera att våra större bilar i första hand prioriteras för rullstols- och bårtransporter, och i vissa fall kan vi behöva skicka två bilar. Meddela gärna antal passagerare vid bokningen.' },
    ],
  },
  {
    id: 'waiting',
    icon: '⏱',
    title: 'Väntetid & Tillgänglighet',
    faqs: [
      { q: 'Hur lång är väntetiden?', a: 'Vanligtvis 5–15 minuter beroende på din plats.' },
      { q: 'Hur lång tid tar det innan taxin kommer?', a: 'Vanligtvis 5–15 minuter beroende på var du befinner dig.' },
      { q: 'Har ni öppet dygnet runt?', a: 'Ja, vi erbjuder taxi 24/7.' },
      { q: 'Finns det taxi under helger och helgdagar?', a: 'Ja, vi kör alla dagar året runt.' },
    ],
  },
  {
    id: 'payment',
    icon: '💳',
    title: 'Betalning',
    faqs: [
      { q: 'Vilka betalningsmetoder accepterar ni?', a: 'Kort, Swish, kontanter samt faktura för företagskunder.' },
      { q: 'Kan jag betala i bilen?', a: 'Ja, du kan betala direkt till föraren vid resans slut.' },
      { q: 'Kan jag betala i förväg?', a: 'Ja, vid bokning online.' },
      { q: 'Tar ni extra avgifter på natten?', a: 'Nej, vi har samma pris dygnet runt (24/7).' },
    ],
  },
  {
    id: 'prices',
    icon: '💰',
    title: 'Priser & Erbjudanden',
    faqs: [
      { q: 'Vad kostar en resa?', a: 'Priset beror på avstånd och tid. Du kan få ett fast pris direkt vid bokning.' },
      { q: 'Hur beräknas priset?', a: 'Priset baseras på tid, avstånd och eventuell fast taxa.' },
      { q: 'Kan jag få ett fast pris?', a: 'Ja, du kan få ett fast pris vid bokning via telefon.' },
      { q: 'Har ni fasta priser till flygplatsen?', a: 'Ja, vi erbjuder fasta priser till och från flygplatsen.' },
      { q: 'Har ni rabatter eller kampanjer?', a: 'Ja, vi erbjuder ibland kampanjer – håll utkik på vår hemsida.' },
    ],
  },
  {
    id: 'service',
    icon: '🧒',
    title: 'Service & Specialbehov',
    faqs: [
      { q: 'Har ni barnstol?', a: 'Ja, ange det vid bokning.' },
      { q: 'Har ni bilbarnstolar?', a: 'Vi erbjuder bakåtvänd bilbarnstol för barn från cirka 9 månaders ålder eller från 9 kg. För mindre barn erbjuder vi tyvärr inte babyskydd, men du är välkommen att ta med eget babyskydd och montera det i bilen, helt utan extra kostnad. Om du vill att vi ska ordna bil med monterad bilbarnstol, meddela det vid bokningen – en avgift på 150 kr tillkommer. Bälteskudde för större barn finns i alla våra bilar och är alltid kostnadsfri.' },
      { q: 'Kan jag resa med husdjur?', a: 'Ja, meddela oss i förväg så vi skickar rätt bil.' },
      { q: 'Kan jag ta med hund eller katt i taxin?', a: 'Ja, det går oftast bra. Meddela alltid vid bokningen att du reser med djur, så ser vi till att skicka en bil där det är tillåtet. Katter ska sitta i transportbur och hundar får resa i bagageutrymmet.' },
      { q: 'Har ni plats för mycket bagage?', a: 'Ja, boka en storbil vid behov.' },
      { q: 'Erbjuder ni rullstolsanpassade fordon?', a: 'Ja, vi har tillgängliga fordon – boka i god tid.' },
    ],
  },
  {
    id: 'environment',
    icon: '🌱',
    title: 'Miljö',
    faqs: [
      { q: 'Har ni elbilar eller miljövänliga alternativ?', a: 'Ja, vi arbetar aktivt för att vara ett hållbart val. Nordic Uppsala Taxi har stadens största miljöbilsflotta och är certifierade enligt Säker Grön Taxi (ISO 14001). Vår flotta omfattar 15 biogasbilar och 37 bilar med 100 % el.' },
    ],
  },
  {
    id: 'trip',
    icon: '🚦',
    title: 'Under Resan',
    faqs: [
      { q: 'Hur hittar jag min förare?', a: 'Du får information om bilen och föraren via sms eller i appen.' },
      { q: 'Hur vet jag att taxin är min?', a: 'Du får information om bilens registreringsnummer och förarens namn.' },
      { q: 'Kan jag ändra min bokning?', a: 'Ja, kontakta oss så snart som möjligt så hjälper vi dig.' },
      { q: 'Kan jag ändra destination under resan?', a: 'Ja, meddela föraren så uppdateras priset.' },
      { q: 'Kan jag dela min resa med någon annan?', a: 'Ja, om det anges vid bokning.' },
    ],
  },
  {
    id: 'cancel',
    icon: '❌',
    title: 'Avbokning & Ändringar',
    faqs: [
      { q: 'Kan jag avboka min resa?', a: 'Ja, avbokning är gratis upp till en viss tid före upphämtning.' },
      { q: 'Hur avbokar jag min resa?', a: 'Via telefon på 018 800 50 50.' },
      { q: 'Kostar det att avboka?', a: 'Nej, om det sker i god tid innan upphämtning.' },
      { q: 'Kan jag ändra tiden för min bokning?', a: 'Ja, kontakta oss så hjälper vi dig.' },
    ],
  },
  {
    id: 'receipt',
    icon: '🧾',
    title: 'Kvitto & Företag',
    faqs: [
      { q: 'Kan jag få kvitto?', a: 'Ja, kvitto skickas via e-post eller ges direkt i bilen.' },
      { q: 'Erbjuder ni företagsavtal?', a: 'Ja, vi har lösningar för företag med fakturering.' },
      { q: 'Kan jag se min resehistorik?', a: 'Ja, i appen eller via kundtjänst.' },
    ],
  },
  {
    id: 'safety',
    icon: '🛡',
    title: 'Säkerhet',
    faqs: [
      { q: 'Är era förare licensierade?', a: 'Ja, alla förare har giltig taxilegitimation.' },
      { q: 'Vad gör jag om jag glömt något i bilen?', a: 'Kontakta oss direkt så hjälper vi dig.' },
    ],
  },
  {
    id: 'support',
    icon: '📞',
    title: 'Support',
    faqs: [
      { q: 'Hur kontaktar jag kundtjänst?', a: 'Via telefon på 018 800 50 50 eller e-post – vi är tillgängliga dygnet runt.' },
      { q: 'Kan jag lämna feedback?', a: 'Ja, vi uppskattar all feedback via vår hemsida eller app.' },
    ],
  },
];

const categoriesEn: Category[] = [
  {
    id: 'booking',
    icon: '🚖',
    title: 'Booking & Trips',
    faqs: [
      { q: 'How do I book a taxi?', a: 'You can book directly in the chat, via our app, or by calling us at 018 800 50 50.' },
      { q: 'How do I book Taxi Uppsala?', a: 'You can easily book a taxi in Uppsala via our website or by calling 018 800 50 50.' },
      { q: 'Can I pre-book a ride?', a: 'Yes, you can book your ride several days in advance.' },
      { q: 'Can I book a taxi for someone else?', a: 'Yes, just provide the passenger\u2019s name and phone number when booking.' },
      { q: 'Can I choose which type of car I want?', a: 'Yes, we offer several options such as standard, large, and premium vehicles.' },
      { q: 'Can I book a return trip directly?', a: 'Yes, you can book both the outbound and return trip at the same time.' },
      { q: 'Can we travel by taxi if we are more than 4 people?', a: 'Yes, usually no problem. We have 24 vehicles that seat between 5 and 8 passengers. Note that our larger vehicles are prioritized for wheelchair and stretcher transports, so in some cases we may need to send two cars. Please let us know the number of passengers when booking.' },
    ],
  },
  {
    id: 'waiting',
    icon: '⏱',
    title: 'Waiting Time & Availability',
    faqs: [
      { q: 'How long is the waiting time?', a: 'Usually 5–15 minutes depending on your location.' },
      { q: 'Are you open 24/7?', a: 'Yes, we provide taxi service 24/7.' },
      { q: 'Do you operate during weekends and holidays?', a: 'Yes, we operate every day of the year.' },
    ],
  },
  {
    id: 'payment',
    icon: '💳',
    title: 'Payment',
    faqs: [
      { q: 'Which payment methods do you accept?', a: 'Card, Swish, cash, and invoicing for business customers.' },
      { q: 'Can I pay in the car?', a: 'Yes, you can pay the driver directly at the end of the trip.' },
      { q: 'Can I pay in advance?', a: 'Yes, when booking online.' },
      { q: 'Do you charge extra at night?', a: 'No, we have the same price 24/7.' },
    ],
  },
  {
    id: 'prices',
    icon: '💰',
    title: 'Prices & Offers',
    faqs: [
      { q: 'How much does a ride cost?', a: 'The price depends on distance and time. You can get a fixed price directly when booking.' },
      { q: 'How is the price calculated?', a: 'The price is based on time, distance, and any fixed rate.' },
      { q: 'Can I get a fixed price?', a: 'Yes, you can get a fixed price when booking by phone.' },
      { q: 'Do you offer fixed prices to the airport?', a: 'Yes, we offer fixed prices to and from the airport.' },
      { q: 'Do you have discounts or promotions?', a: 'Yes, we sometimes offer promotions – keep an eye on our website.' },
    ],
  },
  {
    id: 'service',
    icon: '🧒',
    title: 'Service & Special Needs',
    faqs: [
      { q: 'Do you have a child seat?', a: 'Yes, specify this when booking.' },
      { q: 'Do you have car seats for children?', a: 'We offer rear-facing car seats for children from around 9 months or 9 kg. We don\u2019t provide infant seats, but you\u2019re welcome to bring your own at no extra cost. If you want us to arrange a car with a mounted child seat, please let us know when booking – a fee of 150 SEK applies. Booster seats for older children are available in all our cars and are always free.' },
      { q: 'Can I travel with pets?', a: 'Yes, please let us know in advance so we send the right car.' },
      { q: 'Can I bring a dog or cat in the taxi?', a: 'Yes, usually no problem. Always let us know at booking that you\u2019re travelling with an animal. Cats must be in a carrier, and dogs can travel in the luggage compartment.' },
      { q: 'Do you have room for a lot of luggage?', a: 'Yes, book a larger car if needed.' },
      { q: 'Do you offer wheelchair-accessible vehicles?', a: 'Yes, please contact us well in advance.' },
    ],
  },
  {
    id: 'environment',
    icon: '🌱',
    title: 'Environment',
    faqs: [
      { q: 'Do you have electric or eco-friendly vehicles?', a: 'Yes, we actively work to be a sustainable choice. Nordic Uppsala Taxi has the city\u2019s largest eco-vehicle fleet and is certified under Säker Grön Taxi (ISO 14001). Our fleet includes 15 biogas vehicles and 37 fully electric vehicles.' },
    ],
  },
  {
    id: 'trip',
    icon: '🚦',
    title: 'During the Trip',
    faqs: [
      { q: 'How do I find my driver?', a: 'You get information about the car and driver via SMS or in the app.' },
      { q: 'How do I know the taxi is mine?', a: 'You receive the car\u2019s registration number and the driver\u2019s name.' },
      { q: 'Can I change my booking?', a: 'Yes, contact us as soon as possible and we\u2019ll help you.' },
      { q: 'Can I change the destination during the trip?', a: 'Yes, let the driver know and the price will be updated.' },
      { q: 'Can I share my trip with someone else?', a: 'Yes, if specified at booking.' },
    ],
  },
  {
    id: 'cancel',
    icon: '❌',
    title: 'Cancellation & Changes',
    faqs: [
      { q: 'Can I cancel my trip?', a: 'Yes, cancellation is free up to a certain time before pickup.' },
      { q: 'How do I cancel my trip?', a: 'By phone at 018 800 50 50.' },
      { q: 'Is there a cancellation fee?', a: 'No, if done in good time before pickup.' },
      { q: 'Can I change the time of my booking?', a: 'Yes, contact us and we\u2019ll help you.' },
    ],
  },
  {
    id: 'receipt',
    icon: '🧾',
    title: 'Receipt & Business',
    faqs: [
      { q: 'Can I get a receipt?', a: 'Yes, a receipt is sent by email or given directly in the car.' },
      { q: 'Do you offer business agreements?', a: 'Yes, we have solutions for companies with invoicing.' },
      { q: 'Can I view my trip history?', a: 'Yes, in the app or via customer service.' },
    ],
  },
  {
    id: 'safety',
    icon: '🛡',
    title: 'Safety',
    faqs: [
      { q: 'Are your drivers licensed?', a: 'Yes, all drivers have valid taxi driver licenses.' },
      { q: 'What do I do if I forgot something in the car?', a: 'Contact us directly and we\u2019ll help you.' },
    ],
  },
  {
    id: 'support',
    icon: '📞',
    title: 'Support',
    faqs: [
      { q: 'How do I contact customer service?', a: 'By phone at 018 800 50 50 or email – we\u2019re available 24/7.' },
      { q: 'Can I leave feedback?', a: 'Yes, we appreciate all feedback via our website or app.' },
    ],
  },
];

type Message = { role: 'bot' | 'user'; text: string };

export default function Chatbot() {
  const { lang } = useLang();
  const categories = lang === 'sv' ? categoriesSv : categoriesEn;

  const ui = lang === 'sv' ? {
    greeting: 'Hej! 👋 Jag är Nordic Uppsala Taxi-assistenten. Vad kan jag hjälpa dig med idag?',
    chooseCategory: 'Välj en kategori nedan, eller välj en fråga:',
    backToCategories: '← Tillbaka till kategorier',
    backToQuestions: '← Tillbaka till frågor',
    chatTitle: 'Kundsupport',
    chatSubtitle: 'Vi svarar dygnet runt',
    openLabel: 'Öppna chatt',
    closeLabel: 'Stäng chatt',
    callUs: 'Ring oss: 018 800 50 50',
    thanks: 'Har du fler frågor? Välj nedan eller ring oss direkt.',
  } : {
    greeting: 'Hi! 👋 I\u2019m the Nordic Uppsala Taxi assistant. How can I help you today?',
    chooseCategory: 'Choose a category below, or pick a question:',
    backToCategories: '← Back to categories',
    backToQuestions: '← Back to questions',
    chatTitle: 'Customer Support',
    chatSubtitle: 'We\u2019re here 24/7',
    openLabel: 'Open chat',
    closeLabel: 'Close chat',
    callUs: 'Call us: 018 800 50 50',
    thanks: 'More questions? Pick below or call us directly.',
  };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'bot', text: ui.greeting }]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Reset greeting language when language changes
  useEffect(() => {
    setMessages([{ role: 'bot', text: ui.greeting }]);
    setActiveCategory(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, activeCategory]);

  const currentCategory = categories.find(c => c.id === activeCategory) || null;

  const handleCategory = (id: string) => {
    setActiveCategory(id);
  };

  const handleQuestion = (faq: FAQ) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', text: faq.q },
      { role: 'bot', text: faq.a },
      { role: 'bot', text: ui.thanks },
    ]);
  };

  const handleBack = () => {
    setActiveCategory(null);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? ui.closeLabel : ui.openLabel}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#efbf04] hover:bg-[#d9ae03] transition-all shadow-xl flex items-center justify-center border-4 border-white"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-3 sm:right-6 z-[60] w-[calc(100vw-24px)] sm:w-[400px] max-w-[420px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden font-['Rubik',sans-serif]"
          >
            {/* Header */}
            <div className="bg-[#efbf04] px-5 py-4 border-b-2 border-black/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-[#efbf04] font-black text-lg">NT</div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-base leading-tight">{ui.chatTitle}</p>
                <p className="text-xs text-gray-800 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-600 inline-block"></span>
                  {ui.chatSubtitle}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
                      m.role === 'user'
                        ? 'bg-[#efbf04] text-gray-900 rounded-br-sm font-medium'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <div className="border-t border-gray-200 bg-white p-3 max-h-[240px] overflow-y-auto">
              {!currentCategory ? (
                <>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-1">{ui.chooseCategory}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategory(cat.id)}
                        className="text-left text-sm bg-gray-50 hover:bg-[#efbf04]/15 active:bg-[#efbf04]/25 border border-gray-200 hover:border-[#efbf04] rounded-xl px-3 py-2 transition-all font-medium text-gray-800 flex items-center gap-2"
                      >
                        <span className="text-base">{cat.icon}</span>
                        <span className="truncate">{cat.title}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={handleBack}
                    className="text-xs font-semibold text-gray-600 hover:text-gray-900 mb-2 px-1"
                  >
                    {ui.backToCategories}
                  </button>
                  <div className="space-y-1.5">
                    {currentCategory.faqs.map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuestion(faq)}
                        className="w-full text-left text-sm bg-gray-50 hover:bg-[#efbf04]/15 active:bg-[#efbf04]/25 border border-gray-200 hover:border-[#efbf04] rounded-xl px-3 py-2 transition-all text-gray-800"
                      >
                        {faq.q}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Footer call-to-action */}
            <a
              href="tel:0188005050"
              className="block bg-black text-[#efbf04] font-bold text-sm text-center py-3 hover:bg-gray-900 transition-colors"
            >
              📞 {ui.callUs}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
