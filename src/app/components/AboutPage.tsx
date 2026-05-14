import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../../context/LanguageContext';
import imgImage8 from "../../assets/header.png";
import imgBlackCopy34X1 from "figma:asset/5ebefb298d45f77f13c9f3c3d21fc45a4fcd64f7.png";
import imgImage3 from "figma:asset/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
import imgImage4 from "figma:asset/e38317241a37517e2bff1d220908366e55f1d508.png";
import imgPhoneCall1 from "figma:asset/1a67329c0c4e11529c60e156b41c100da977b790.png";
import imgGps11 from "figma:asset/6b04569393a3d13d496db99adbdb9b8f07dd8d75.png";
import imgEmail1 from "figma:asset/983082677ce2adf17214594f1b83e51d932a2242.png";
import imgBlackCopy24X1 from "figma:asset/3c567e19fb5378f6ac3879e4a5d32c0222721849.png";
import imgSweden1 from "figma:asset/854638555389ddcac54d066581f19318be52d6b1.png";

export default function AboutPage() {
  const { tr, lang, toggleLang } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    {
      icon: '⭐',
      title: tr.qualityTitle,
      content: [
        { type: 'text' as const, value: tr.quality1 },
        { type: 'text' as const, value: tr.quality2 },
        {type: 'text' as const, value: tr.quality5},
        { type: 'list' as const, items: [tr.qualityItem1, tr.qualityItem2, tr.qualityItem3, tr.qualityItem4] },
        { type: 'text' as const, value: tr.quality3 },
      ],
    },
    {
      icon: '🚕',
      title: tr.serviceTitle,
      content: [
        { type: 'text' as const, value: tr.service1 },
        { type: 'text' as const, value: tr.service2 },
      ],
    },
    {
      icon: '🛡️',
      title: tr.safetyTitle,
      content: [
        { type: 'text' as const, value: tr.safety1 },
        { type: 'list' as const, items: [tr.safetyItem1, tr.safetyItem2, tr.safetyItem3] },
        { type: 'text' as const, value: tr.safety2 },
        { type: 'text' as const, value: tr.safety3 },
      ],
    },
    {
      icon: '🌿',
      title: tr.envTitle,
      content: [
        { type: 'text' as const, value: tr.env1 },
        { type: 'text' as const, value: tr.env2 },
      ],
    },
    {
      icon: '✅',
      title: tr.bkyTitle,
      content: [
        { type: 'text' as const, value: tr.bky1 },
        { type: 'text' as const, value: tr.bky2 },
        { type: 'text' as const, value: tr.bky3 },
        { type: 'list' as const, items: [tr.safetyItem1, tr.safetyItem2, tr.safetyItem3] },
      ],
    },
  ];

  return (
    <div className="bg-white relative min-h-screen font-['Rubik',sans-serif]">

      {/* ── Header ── */}
      <div className="relative h-[160px] sm:h-[200px] md:h-[220px]">
        <div className="absolute inset-0">
          <img alt="" className="absolute h-full w-full object-cover" src={imgImage8} />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="absolute left-0 top-0 right-0 z-20 px-4 sm:px-8 lg:px-[49px] pt-5">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img alt="Nordic Uppsala Taxi" className="h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] lg:h-[140px] lg:w-[140px] brightness-0 invert" src={imgBlackCopy34X1} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link to="/about" className="font-bold text-sm text-[#efbf04] tracking-wide border-b-2 border-[#efbf04] pb-0.5">{tr.aboutUs}</Link>
              <Link to="/price" className="font-bold text-sm text-white hover:text-[#efbf04] transition-colors tracking-wide">{tr.price}</Link>
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
      </div>

      {/* ── Main Content ── */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[160px] py-12 lg:py-16">
        <h1 className="font-bold text-[#efbf04] text-2xl sm:text-3xl lg:text-[40px] mb-5 leading-tight">
          {tr.aboutH1}
        </h1>
        <h2 className='mb-4'>
          {tr.aboutUnder}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-12 max-w-[760px]">{tr.aboutIntro}</p>

        <div className="space-y-10 max-w-[820px]">
          {sections.map(section => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="font-bold text-gray-900 text-xl sm:text-2xl">{section.title}</h2>
              </div>
              <div className="pl-0 sm:pl-11 space-y-3">
                {section.content.map((block, idx) => {
                  if (block.type === 'text') {
                    return <p key={idx} className="text-base text-gray-700 leading-relaxed">{block.value}</p>;
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={idx} className="space-y-2">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-3 text-base text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="mt-8 h-px bg-gray-100" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#efbf04]/10 border border-[#efbf04]/20 rounded-2xl p-6 sm:p-8 max-w-[820px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-bold text-gray-900 text-xl mb-1">{tr.ctaTitle}</h3>
            <p className="text-gray-600 text-base">{tr.ctaDesc}</p>
          </div>
          <Link to="/" className="bg-[#efbf04] hover:bg-[#d9ab03] text-black font-bold px-7 py-3 rounded-xl text-base transition-all active:scale-95 shadow-sm whitespace-nowrap">
            {tr.ctaBtn}
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t-[5px] border-black bg-[#efbf04] mt-4">
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
                <div className="flex items-start gap-2.5"><img alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" src={imgGps11} /><span className="text-sm text-black leading-relaxed">Strandbodkilen 1, 753 24 Uppsala<br />00:00 – 24/7</span></div>
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
