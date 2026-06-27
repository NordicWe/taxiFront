import imgImage7 from "figma:asset/886d054201d488da8e72e3847e45301fe34f960c.png";
import imgPhoneCall3 from "figma:asset/8b7f304019cb97a901102646b7e8126fdb490f7b.png";
import imgBlackCopy34X1 from "figma:asset/5ebefb298d45f77f13c9f3c3d21fc45a4fcd64f7.png";
import imgSweden1 from "figma:asset/854638555389ddcac54d066581f19318be52d6b1.png";
import imgImage3 from "figma:asset/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
import imgImage4 from "figma:asset/e38317241a37517e2bff1d220908366e55f1d508.png";
import imgPhoneCall1 from "figma:asset/1a67329c0c4e11529c60e156b41c100da977b790.png";
import imgGps11 from "figma:asset/6b04569393a3d13d496db99adbdb9b8f07dd8d75.png";
import imgEmail1 from "figma:asset/983082677ce2adf17214594f1b83e51d932a2242.png";
import imgBlackCopy24X1 from "figma:asset/3c567e19fb5378f6ac3879e4a5d32c0222721849.png";

function Background() {
  return (
    <div className="absolute contents left-0 top-0" data-name="background">
      <div className="absolute h-[454px] left-0 top-0 w-[1280px]" data-name="image 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[211.45%] left-0 max-w-none top-[-23.39%] w-full" src={imgImage7} />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[454px] left-0 top-0 w-[1280px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[559px] top-[254px]">
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[601px] opacity-78 text-[16px] text-black top-[257px] w-[120px]">018 800 50 50</p>
      <div className="absolute left-[559px] size-[25px] top-[254px]" data-name="phone-call 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoneCall3} />
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="absolute contents left-[479px] top-[195px]" data-name="map">
      <div className="-translate-x-1/2 absolute bg-white h-[36px] left-1/2 rounded-[20px] top-[249px] w-[290px]" />
      <Group4 />
      <p className="-translate-x-1/2 absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[640px] text-[12px] text-center text-white top-[296px] w-[322px]">
        <span className="leading-[normal]">{`Our dispatch center is `}</span>
        <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">{`open 24 hours a day, every day of the week. `}</span>
        <span className="leading-[normal]">You can easily book your taxi at any time.</span>
      </p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-49px)] text-[36px] text-white top-[195px] whitespace-nowrap">price</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-[61px] top-[-8px]" data-name="menu">
      <div className="absolute bg-[#efbf04] h-[30px] left-[790px] rounded-[30px] top-[40px] w-[106px]" />
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[966px] text-[12px] text-white top-[48px] whitespace-nowrap">Book a Taxi</p>
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[825px] text-[12px] text-white top-[48px] uppercase whitespace-nowrap">Price</p>
      <p className="absolute capitalize font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[659px] text-[12px] text-white top-[48px] whitespace-nowrap">About us</p>
      <div className="absolute left-[61px] size-[140px] top-[-8px]" data-name="black copy 3@4x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackCopy34X1} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[-8px]" data-name="header">
      <Background />
      <Map />
      <Menu />
    </div>
  );
}

function Text() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+21px)] top-[529px]" data-name="text">
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-408px)] text-[12px] text-black text-justify top-[597px] w-[818px]">
        <span className="leading-[normal]">{`With `}</span>
        <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">Nordic Uppsala Taxi,</span>
        <span className="leading-[normal]">{` you can travel comfortably and safely at a `}</span>
        <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">{`fixed price `}</span>
        <span className="leading-[normal]">{`to and from `}</span>
        <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">Stockholm Arlanda Airport.</span>
      </p>
      <p className="absolute capitalize font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[232px] text-[#efbf04] text-[40px] top-[529px] w-[858px]">Travel Easily Between Uppsala and Arlanda</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[232px] top-[1005px]">
      <div className="absolute bg-[#efbf04] h-[114px] left-[362px] top-[1065px] w-[459px]" />
      <div className="absolute border border-black border-solid h-[310px] left-[232px] top-[1005px] w-[589px]" />
      <div className="absolute h-0 left-[232px] top-[1035px] w-[589px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 1">
            <line id="Line 18" stroke="var(--stroke-0, black)" x2="589" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[232px] top-[1065px] w-[589px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 1">
            <line id="Line 18" stroke="var(--stroke-0, black)" x2="589" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[232px] top-[1209px] w-[589px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 1">
            <line id="Line 18" stroke="var(--stroke-0, black)" x2="589" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[232px] top-[1248px] w-[589px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 1">
            <line id="Line 18" stroke="var(--stroke-0, black)" x2="589" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[232px] top-[1179px] w-[589px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 1">
            <line id="Line 18" stroke="var(--stroke-0, black)" x2="589" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[232px] top-[1123px] w-[280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 1">
            <line id="Line 20" stroke="var(--stroke-0, black)" x2="280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[114px] items-center justify-center left-[362px] top-[1065px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[114px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 1">
                <line id="Line 21" stroke="var(--stroke-0, black)" x2="114" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[114px] items-center justify-center left-[512px] top-[1065px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[114px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 1">
                <line id="Line 22" stroke="var(--stroke-0, black)" x2="114" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[243px] text-[16px] text-black text-justify top-[1010px] whitespace-nowrap">Nordic Uppsala Taxi</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[388px] text-[16px] text-black text-justify top-[1184px] whitespace-nowrap">Always request a taximeter receipt !</p>
      <p className="-translate-x-1/2 absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[526.5px] text-[12px] text-black text-center top-[1214px] w-[339px]">The basis for how the price is determined can be found in the price information displayed inside the taxi vehicle.</p>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[242px] text-[12px] text-black top-[1253px] w-[275px]">
        <p className="mb-0">
          <span className="leading-[normal]">{`The following `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">{`fares and fees `}</span>
          <span className="leading-[normal]">may apply:</span>
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[18px]">
            <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">Pet fee</span>
          </li>
          <li className="ms-[18px]">
            <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">Fixed prices may apply</span>
          </li>
        </ul>
        <p>
          <span className="leading-[normal]">{`Written information is `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">available from the driver.</span>
        </p>
      </div>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[243px] text-[16px] text-black text-justify top-[1040px] uppercase whitespace-nowrap">Price Information</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[273px] text-[16px] text-black text-justify top-[1084px] whitespace-nowrap">When</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[368px] text-[16px] text-black text-justify top-[1070px] whitespace-nowrap">Comparison Price</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[406px] text-[16px] text-black text-justify top-[1141px] whitespace-nowrap">499SEK</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[543px] text-[65px] text-black text-justify top-[1105px] whitespace-nowrap">499SEK</p>
      <p className="-translate-x-1/2 absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[667.5px] text-[16px] text-black text-center top-[1071px] w-[237px]">The highest comparison price applied by this taxi vehicle.</p>
      <p className="-translate-x-1/2 absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[437px] text-[12px] text-black text-center top-[1089px] w-[68px]">10 km / 15 minutes</p>
      <p className="-translate-x-1/2 absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[294.5px] text-[12px] text-black text-center top-[1137px] w-[93px] whitespace-pre-wrap">
        Weekdays:
        <br aria-hidden="true" />
        {` 00:00 – 24:00`}
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[695px] top-[1555px]">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[730px] text-[12px] text-black top-[1558px] whitespace-nowrap">018 800 50 50</p>
      <div className="absolute left-[695px] size-[20px] top-[1555px]" data-name="phone-call 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoneCall1} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[695px] top-[1591px]">
      <p className="absolute capitalize font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[730px] text-[12px] text-black top-[1591px] w-[126px] whitespace-pre-wrap">
        {`Murargatan 33 uppsala `}
        <br aria-hidden="true" />
        00:00 24/7
      </p>
      <div className="absolute left-[695px] size-[20px] top-[1595px]" data-name="gps (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGps11} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[695px] top-[1635px]">
      <p className="absolute font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[730px] text-[12px] text-black top-[1638px] whitespace-nowrap">bokning@nordicuppsalataxi.se</p>
      <div className="absolute left-[695px] size-[20px] top-[1635px]" data-name="email 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmail1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[138px] top-[1423px]">
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[515px] text-[14px] text-black top-[1470px] whitespace-nowrap">Sitelinks</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[743px] text-[14px] text-black top-[1470px] whitespace-nowrap">Contact</p>
      <p className="-translate-x-1/2 absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[1042.5px] text-[13px] text-black text-center top-[1470px] w-[167px]">App download (swedish)</p>
      <div className="absolute flex h-[201px] items-center justify-center left-[445px] top-[1452px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[201px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 0.5">
                <line id="Line 14" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="201" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[201px] items-center justify-center left-[645px] top-[1452px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[201px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 0.5">
                <line id="Line 14" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="201" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[201px] items-center justify-center left-[909px] top-[1452px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[201px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 0.5">
                <line id="Line 14" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="201" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[695px] text-[12px] text-black top-[1507px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Booking</p>
        <p className="leading-[normal]">Mon–Sun | Open 24 hours</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[151px] text-[12px] text-black text-justify top-[1554px] w-[250px]">
        <p className="leading-[normal] mb-0">Nordic Uppsala Taxi is at the forefront when it comes to traffic management systems.</p>
        <p className="leading-[normal]">With us, you can book your taxi by phone, online, or through our mobile app.</p>
      </div>
      <div className="absolute h-[70px] left-[980px] top-[1495px] w-[125px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[33px] left-[986px] rounded-[5px] top-[1562px] w-[115px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
          <img alt="" className="absolute h-[159.3%] left-[-8.61%] max-w-none top-[-29.65%] w-[117.65%]" src={imgImage4} />
        </div>
      </div>
      <Group3 />
      <Group1 />
      <Group2 />
      <div className="absolute left-[138px] size-[170px] top-[1423px]" data-name="black copy 2@4x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackCopy24X1} />
      </div>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[521px] text-[12px] text-black top-[1514px] whitespace-nowrap">about us</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[521px] text-[12px] text-black top-[1544px] whitespace-nowrap">price</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[521px] text-[12px] text-black top-[1574px] whitespace-nowrap">
        <span className="leading-[normal]">{`book `}</span>
        <span className="leading-[normal]">a</span>
        <span className="leading-[normal]">{` taxi`}</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[1390px]" data-name="footer">
      <div className="-translate-x-1/2 absolute bg-[#efbf04] border-black border-solid border-t-5 h-[383px] left-1/2 top-[1390px] w-[1280px]" />
      <Group />
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[821px] text-[12px] text-black text-justify top-[1738px] whitespace-nowrap">Travel Terms</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[926px] text-[12px] text-black text-justify top-[1738px] whitespace-nowrap">GDPR Policy</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[1040px] text-[12px] text-black text-justify top-[1738px] whitespace-nowrap">Safety Policy</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[1158px] text-[12px] text-black text-justify top-[1738px] whitespace-nowrap">Cookie Policy</p>
      <div className="absolute flex h-[20px] items-center justify-center left-[904px] top-[1735px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 0.5">
                <line id="Line 26" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="20" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[20px] items-center justify-center left-[1018px] top-[1735px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 0.5">
                <line id="Line 26" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="20" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[20px] items-center justify-center left-[1132px] top-[1735px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 0.5">
                <line id="Line 26" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="20" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[1404.5px] w-[1280.004px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 3">
            <line id="Line 13" stroke="var(--stroke-0, black)" strokeDasharray="15 15" strokeLinecap="square" strokeWidth="3" x1="1.5" x2="1278.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function EnglishPrice() {
  return (
    <div className="bg-white relative size-full" data-name="English price">
      <Header />
      <Text />
      <div className="absolute font-['Rubik:Light',sans-serif] font-light leading-[0] left-[calc(50%-407px)] text-[0px] text-black top-[646px] w-[815px]">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal] mb-0 text-[16px] whitespace-pre-wrap">You can choose the option that suits you best:</p>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">Take a Nordic Uppsala Taxi directly from the taxi queue</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="leading-[normal] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
            <span className="font-['Rubik:Medium',sans-serif] font-medium">{`Book online `}</span>
            <span className="font-['Rubik:Regular',sans-serif] font-normal">through our website</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal] text-[12px]">Book through our mobile app</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">{`When booking, simply provide your `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">flight number and arrival time,</span>
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">{` and we can easily `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">track your flight and adjust the pickup time accordingly.</span>
        </p>
      </div>
      <div className="absolute font-['Rubik:Light',sans-serif] font-light leading-[0] left-[calc(50%-407px)] text-[0px] text-black text-justify top-[811px] w-[815px]">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal] mb-0 text-[16px] whitespace-pre-wrap">Fixed Prices Uppsala – Arlanda</p>
        <p className="leading-[normal] mb-0 text-[16px] whitespace-pre-wrap">&nbsp;</p>
        <p className="mb-0 text-[12px] whitespace-pre-wrap">
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">{`For trips to and from `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">{`Uppsala urban area, `}</span>
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">the following fixed prices apply:</span>
        </p>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="leading-[normal] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
            <span className="font-['Rubik:Medium',sans-serif] font-medium">1–4 passengers:</span>
            <span className="font-['Rubik:Regular',sans-serif] font-normal">{` 595 SEK`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="leading-[normal] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
            <span className="font-['Rubik:Medium',sans-serif] font-medium">{`5–8 passengers: `}</span>
            <span className="font-['Rubik:Regular',sans-serif] font-normal">1095 SEK</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">{`All prices are `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">{`fixed, `}</span>
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">{`meaning you will know the cost of your trip `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">before you travel.</span>
        </p>
      </div>
      <Group5 />
      <div className="absolute left-[1150px] size-[30px] top-[40px]" data-name="sweden 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSweden1} />
      </div>
      <Footer />
    </div>
  );
}