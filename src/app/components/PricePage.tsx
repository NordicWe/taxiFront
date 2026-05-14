import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../../context/LanguageContext';
import imgImage7 from "../../assets/price.png";
import imgPhoneCall3 from "figma:asset/8b7f304019cb97a901102646b7e8126fdb490f7b.png";
import imgBlackCopy34X1 from "figma:asset/5ebefb298d45f77f13c9f3c3d21fc45a4fcd64f7.png";
import imgSweden1 from "figma:asset/854638555389ddcac54d066581f19318be52d6b1.png";
import imgImage3 from "figma:asset/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
import imgImage4 from "figma:asset/e38317241a37517e2bff1d220908366e55f1d508.png";
import imgPhoneCall1 from "figma:asset/1a67329c0c4e11529c60e156b41c100da977b790.png";
import imgGps11 from "figma:asset/6b04569393a3d13d496db99adbdb9b8f07dd8d75.png";
import imgEmail1 from "figma:asset/983082677ce2adf17214594f1b83e51d932a2242.png";
import imgBlackCopy24X1 from "figma:asset/3c567e19fb5378f6ac3879e4a5d32c0222721849.png";

export default function PricePage() {
  const { tr, lang, toggleLang } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white relative min-h-screen font-['Rubik',sans-serif]">

      {/* ── Header ── */}
      <div className="relative h-[320px] sm:h-[380px] md:h-[454px]">
        <div className="absolute inset-0">
          <img alt="" className="h-full w-full object-cover object-top" src={imgImage7} />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Nav */}
        <div className="absolute left-0 top-0 right-0 z-20 px-4 sm:px-8 lg:px-[61px] pt-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img alt="Nordic Uppsala Taxi" className="h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] lg:h-[130px] lg:w-[130px] brightness-0 invert" src={imgBlackCopy34X1} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link to="/about" className="font-bold text-sm text-white hover:text-[#efbf04] transition-colors tracking-wide">{tr.aboutUs}</Link>
              <Link to="/price" className="font-bold text-sm text-[#efbf04] tracking-wide border-b-2 border-[#efbf04] pb-0.5">{tr.price}</Link>
              <Link to="/" className="font-bold text-sm text-white hover:text-[#efbf04] transition-colors tracking-wide">{tr.bookATaxi}</Link>
              <button
                onClick={toggleLang}
                className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-white/30 hover:border-[#efbf04] transition-all"
                title={lang === 'en' ? 'Switch to Swedish' : 'Byt till engelska'}
              >
                <img alt="" className="h-full w-full object-cover" src={imgSweden1} />
                <div className={`absolute inset-0 flex items-center justify-center text-[9px] font-black ${lang === 'sv' ? 'bg-blue-700/80 text-white' : 'bg-transparent'}`}>
                  {lang === 'sv' ? 'SV' : ''}
                </div>
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors">
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
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-black/80 backdrop-blur-md rounded-xl mt-3 p-4 space-y-2">
                {[
                  { to: '/about', label: tr.aboutUs },
                  { to: '/price', label: tr.price },
                  { to: '/', label: tr.bookATaxi },
                ].map(link => (
                  <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="block py-2.5 font-semibold text-white text-base border-b border-white/10 hover:text-[#efbf04] transition-colors last:border-0">
                    {link.label}
                  </Link>
                ))}
                <button onClick={toggleLang} className="flex items-center gap-2 bg-white/10 text-white font-bold text-sm px-4 h-[40px] rounded-xl w-full mt-2">
                  <img alt="" className="h-5 w-5 rounded-full object-cover" src={imgSweden1} />
                  {lang === 'en' ? 'EN → SV' : 'SV → EN'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10 z-10 text-center w-full px-4">
          <h1 className="font-light text-3xl sm:text-4xl text-white mb-5 tracking-tight">{tr.price}</h1>
          <div className="inline-flex bg-white h-[44px] rounded-full items-center justify-center gap-3 px-6 mb-4 shadow-lg">
            <img alt="" className="h-6 w-6" src={imgPhoneCall3} />
            <span className="font-bold text-lg text-gray-900">018 800 50 50</span>
          </div>
          <p className="text-sm text-white/90 text-center max-w-[360px] mx-auto leading-relaxed">
            {tr.dispatchOpen}
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[160px] py-12 lg:py-16">
        <h1 className="font-bold text-[#efbf04] text-2xl sm:text-3xl lg:text-[40px] mb-5 leading-tight max-w-[700px]">
          {tr.priceH1}
        </h1>
        <p className="text-base text-gray-700 leading-relaxed mb-10 max-w-[760px]">{tr.priceIntro}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-[900px]">
          {/* How to Book */}
          <div>
            <h2 className="font-bold text-gray-900 text-xl mb-4">{tr.howToBook}</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">{tr.howToBookIntro}</p>
            <ul className="space-y-3 mb-5">
              {[tr.bookOption1, tr.bookOption2, tr.bookOption3].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-[#efbf04] text-black text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 leading-relaxed bg-gray-50 rounded-xl p-4 border border-gray-100">
              {tr.flightInfo}
            </p>
          </div>

          {/* Fixed Prices */}
          <div>
            <h2 className="font-bold text-gray-900 text-xl mb-4">{tr.fixedPrices}</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">{tr.fixedPricesIntro}</p>
            <div className="space-y-3 mb-5">
              <div className="bg-[#efbf04]/10 border border-[#efbf04]/20 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 text-base">{tr.passengers14}</p>
                  <p className="text-sm text-gray-500">{tr.passengers14Sub}</p>
                </div>
                <p className="font-black text-2xl text-gray-900">595 <span className="text-sm font-semibold text-gray-500">SEK</span></p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 text-base">{tr.passengers58}</p>
                  <p className="text-sm text-gray-500">{tr.passengers58Sub}</p>
                </div>
                <p className="font-black text-2xl text-gray-900">1 095 <span className="text-sm font-semibold text-gray-500">SEK</span></p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{tr.allPricesFixed}</p>
          </div>
        </div>

        {/* Price Info Table */}
        <div className="mt-12 border border-gray-200 rounded-2xl overflow-hidden max-w-[720px] shadow-sm">
          <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
            <p className="font-bold text-gray-900 text-base">{tr.priceInfoTitle}</p>
          </div>
          <div className="px-5 py-4 border-b border-gray-200 bg-[#efbf04]">
            <p className="font-bold text-gray-900 text-lg uppercase tracking-wide text-center">{tr.uppsalaTaxiPrices}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 sm:px-5 py-3 font-bold text-gray-800 text-sm uppercase tracking-wide">{tr.fromCol}</th>
                  <th className="px-4 sm:px-5 py-3 font-bold text-gray-800 text-sm uppercase tracking-wide">{tr.toCol}</th>
                  <th className="px-4 sm:px-5 py-3 font-bold text-gray-800 text-sm uppercase tracking-wide text-right">{tr.priceCol}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { to: 'Arlanda flygplats (ARN)', price: '595 kr' },
                  { to: 'Bromma flygplats (BMA)', price: '965 kr' },
                  { to: 'Skavsta flygplats (NYO)', price: '2280 kr' },
                  { to: 'Västerås flygplats (VST)', price: '1045 kr' },
                  { to: 'Cityterminalen Centralstation', price: '1005 kr' },
                  { to: 'Arlanda Express Tåget', price: '990 kr' },
                  { to: 'Älvsjö Mässan', price: '1095 kr' },
                  { to: 'Kista Mässan', price: '875 kr' },
                  { to: 'Globen', price: '1120 kr' },
                  { to: 'Enköping', price: '700 kr' },
                  { to: 'Uppsala (inom stad)', price: '110 kr' },
                  { to: 'Viking Line', price: '1035 kr' },
                  { to: 'Silja Line', price: '1005 kr' },
                  { to: 'Birka Cruises', price: '1035 kr' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 sm:px-5 py-3 text-sm text-gray-700 font-medium">{tr.uppsalaLabel}</td>
                    <td className="px-4 sm:px-5 py-3 text-sm text-gray-700">{row.to}</td>
                    <td className="px-4 sm:px-5 py-3 text-sm font-bold text-gray-900 text-right whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-gray-200 bg-amber-50">
            <p className="font-bold text-gray-900 text-sm flex items-center gap-2">🧾 {tr.taxiReceipt}</p>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center leading-relaxed">{tr.priceBasis}</p>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-700 mb-2">{tr.faresMayApply}</p>
            <ul className="list-disc ml-5 mb-2 space-y-1">
              <li className="font-semibold text-sm text-gray-800">{tr.petFee}</li>
              <li className="font-semibold text-sm text-gray-800">{tr.fixedPricesMayApply}</li>
            </ul>
            <p className="text-sm text-gray-600">{tr.writtenInfo}</p>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t-[5px] border-black bg-[#efbf04] mt-8">
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
                {[{ to: '/about', label: tr.aboutUs }, { to: '/price', label: tr.price }, { to: '/', label: tr.bookATaxi }].map(l => (
                  <Link key={l.to} to={l.to} className="block text-sm text-black hover:underline font-medium">{l.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base text-black mb-5 uppercase tracking-wide">{tr.contact}</h3>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-black">{tr.bookingHours}<br /><span className="font-normal text-black/70">{tr.monSun}</span></p>
                <div className="flex items-center gap-2.5"><img alt="" className="h-5 w-5 flex-shrink-0" src={imgPhoneCall1} /><span className="text-sm font-semibold text-black">018 800 50 50</span></div>
                <div className="flex items-start gap-2.5"><img alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" src={imgGps11} /><span className="text-sm text-black leading-relaxed">MStrandbodkilen 1, 753 24 Uppsala<br />00:00 – 24/7</span></div>
                <div className="flex items-center gap-2.5"><img alt="" className="h-5 w-5 flex-shrink-0" src={imgEmail1} /><span className="text-sm text-black">bokning@nordicuppsalataxi.se</span></div>
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
    </div>
  );
}
