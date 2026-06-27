import imgImage8 from "figma:asset/173715ade628706ee7ac1966f174ce36a465f102.png";
import imgBlackCopy34X1 from "figma:asset/5ebefb298d45f77f13c9f3c3d21fc45a4fcd64f7.png";
import imgImage3 from "figma:asset/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
import imgImage4 from "figma:asset/e38317241a37517e2bff1d220908366e55f1d508.png";
import imgPhoneCall1 from "figma:asset/1a67329c0c4e11529c60e156b41c100da977b790.png";
import imgGps11 from "figma:asset/6b04569393a3d13d496db99adbdb9b8f07dd8d75.png";
import imgEmail1 from "figma:asset/983082677ce2adf17214594f1b83e51d932a2242.png";
import imgBlackCopy24X1 from "figma:asset/3c567e19fb5378f6ac3879e4a5d32c0222721849.png";
import imgSweden1 from "figma:asset/854638555389ddcac54d066581f19318be52d6b1.png";

function Background() {
  return (
    <div className="absolute contents left-[-2px] top-0" data-name="background">
      <div className="absolute h-[104px] left-[-2px] top-0 w-[1292px]" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[827.2%] left-[0.04%] max-w-none top-[-285.45%] w-full" src={imgImage8} />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[103px] left-0 top-0 w-[1280px]" />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-[49px] top-[-8px]" data-name="menu">
      <div className="absolute bg-[#efbf04] h-[30px] left-[632px] rounded-[30px] top-[40px] w-[106px]" />
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[966px] text-[12px] text-white top-[48px] whitespace-nowrap">Book a Taxi</p>
      <p className="absolute capitalize font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[819px] text-[12px] text-white top-[48px] whitespace-nowrap">price</p>
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[654px] text-[12px] text-white top-[48px] uppercase whitespace-nowrap">about us</p>
      <div className="absolute left-[1100px] size-[20px] top-[45px]" data-name="search 2" />
      <div className="absolute left-[49px] size-[140px] top-[-8px]" data-name="black copy 3@4x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackCopy34X1} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[-2px] top-[-8px]" data-name="header">
      <Background />
      <Menu />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents left-[232px] top-[195px]" data-name="text">
      <p className="absolute capitalize font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[232px] text-[#efbf04] text-[40px] text-justify top-[195px] w-[612.435px]">about us</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[695px] top-[1380px]">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[730px] text-[12px] text-black top-[1383px] whitespace-nowrap">018 800 50 50</p>
      <div className="absolute left-[695px] size-[20px] top-[1380px]" data-name="phone-call 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoneCall1} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[695px] top-[1416px]">
      <p className="absolute capitalize font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[730px] text-[12px] text-black top-[1416px] w-[126px] whitespace-pre-wrap">
        {`Murargatan 33 uppsala `}
        <br aria-hidden="true" />
        00:00 24/7
      </p>
      <div className="absolute left-[695px] size-[20px] top-[1420px]" data-name="gps (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGps11} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[695px] top-[1460px]">
      <p className="absolute font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[730px] text-[12px] text-black top-[1463px] whitespace-nowrap">bokning@nordicuppsalataxi.se</p>
      <div className="absolute left-[695px] size-[20px] top-[1460px]" data-name="email 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmail1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[138px] top-[1248px]">
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[515px] text-[14px] text-black top-[1295px] whitespace-nowrap">Sitelinks</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[743px] text-[14px] text-black top-[1295px] whitespace-nowrap">Contact</p>
      <p className="-translate-x-1/2 absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[1042.5px] text-[13px] text-black text-center top-[1295px] w-[167px]">App download (swedish)</p>
      <div className="absolute flex h-[201px] items-center justify-center left-[445px] top-[1277px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[201px] items-center justify-center left-[645px] top-[1277px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[201px] items-center justify-center left-[909px] top-[1277px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[695px] text-[12px] text-black top-[1332px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Booking</p>
        <p className="leading-[normal]">Mon–Sun | Open 24 hours</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[151px] text-[12px] text-black text-justify top-[1379px] w-[240px]">
        <p className="leading-[normal] mb-0">Uppsala Taxi is at the forefront when it comes to traffic management systems.</p>
        <p className="leading-[normal]">With us, you can book your taxi by phone, online, or through our mobile app.</p>
      </div>
      <div className="absolute h-[70px] left-[980px] top-[1320px] w-[125px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[33px] left-[986px] rounded-[5px] top-[1387px] w-[115px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
          <img alt="" className="absolute h-[159.3%] left-[-8.61%] max-w-none top-[-29.65%] w-[117.65%]" src={imgImage4} />
        </div>
      </div>
      <Group3 />
      <Group1 />
      <Group2 />
      <div className="absolute left-[138px] size-[170px] top-[1248px]" data-name="black copy 2@4x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackCopy24X1} />
      </div>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[521px] text-[12px] text-black top-[1339px] whitespace-nowrap">about us</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[521px] text-[12px] text-black top-[1369px] whitespace-nowrap">price</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[521px] text-[12px] text-black top-[1399px] whitespace-nowrap">
        <span className="leading-[normal]">{`book `}</span>
        <span className="leading-[normal]">a</span>
        <span className="leading-[normal]">{` taxi`}</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[1215px]" data-name="footer">
      <div className="-translate-x-1/2 absolute bg-[#efbf04] border-black border-solid border-t-5 h-[383px] left-1/2 top-[1215px] w-[1280px]" />
      <Group />
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[821px] text-[12px] text-black text-justify top-[1563px] whitespace-nowrap">Travel Terms</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[926px] text-[12px] text-black text-justify top-[1563px] whitespace-nowrap">GDPR Policy</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[1040px] text-[12px] text-black text-justify top-[1563px] whitespace-nowrap">Safety Policy</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[1158px] text-[12px] text-black text-justify top-[1563px] whitespace-nowrap">Cookie Policy</p>
      <div className="absolute flex h-[20px] items-center justify-center left-[904px] top-[1560px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[20px] items-center justify-center left-[1018px] top-[1560px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[20px] items-center justify-center left-[1132px] top-[1560px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute h-0 left-0 top-[1229.5px] w-[1280.004px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 3">
            <line id="Line 13" stroke="var(--stroke-0, black)" strokeDasharray="15 15" strokeLinecap="square" strokeWidth="3" x1="1.5" x2="1278.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function EnglishInfo() {
  return (
    <div className="bg-white relative size-full" data-name="English info">
      <Header />
      <Text />
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-407px)] text-[12px] text-black text-justify top-[262px] w-[815px]">Nordic Uppsala Taxi offers safe, professional, and flexible taxi services. We work every day to provide our customers with a secure and comfortable journey. Our service operates 24 hours a day, all year round, so you can always rely on us whenever you need transportation.</p>
      <div className="absolute font-['Rubik:Light',sans-serif] font-light leading-[0] left-[calc(50%-407px)] text-[0px] text-black text-justify top-[325px] w-[815px]">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal] mb-0 text-[16px] whitespace-pre-wrap">Quality</p>
        <p className="leading-[normal] mb-0 text-[16px] whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">We actively work with quality through our quality management system “Säker Taxi” (Safe Taxi). As a customer, you can always request a fixed price for all types of trips, which makes your journey safe and predictable.</p>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">All of our drivers have completed thorough training that includes:</p>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Local area knowledge`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Cardiopulmonary resuscitation (CPR)`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Fire safety`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Customer service and communication`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px] whitespace-pre-wrap">This ensures that you are always served by a professional and service-oriented driver.</p>
      </div>
      <div className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[0] left-[calc(50%-409px)] text-[0px] text-black text-justify top-[593px] w-[820px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0 text-[16px]">Service</p>
        <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[12px]">At the time of booking, you will normally receive information about when the car is expected to arrive. If necessary, the driver can also contact you by phone or SMS while on the way to the pickup address.</p>
        <p className="leading-[normal] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">We use modern dispatch systems that make it possible to quickly and efficiently match the right car with the right customer. This allows us to provide fast service and shorter waiting times.</p>
      </div>
      <div className="absolute capitalize font-['Rubik:Medium',sans-serif] font-medium leading-[0] left-[calc(50%-407px)] text-[0px] text-black text-justify top-[735px] w-[815px]">
        <p className="mb-0 text-[16px] whitespace-pre-wrap">
          <span className="leading-[normal]">{`Safety `}</span>
          <span className="leading-[normal]">{`and `}</span>
          <span className="leading-[normal]">Security</span>
        </p>
        <p className="leading-[normal] mb-0 text-[16px] whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">Your safety is very important to us. Therefore, all of our cars are equipped with:</p>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Alcohol ignition interlocks`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Security cameras`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">{` Clear driver identification displayed in the vehicle`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[12px] whitespace-pre-wrap">If needed, we can also provide a child car seat to ensure a safe trip for the whole family.</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px] whitespace-pre-wrap">Our vehicles are easy to recognize thanks to their uniform design, and our drivers always wear professional uniforms.</p>
      </div>
      <div className="absolute capitalize font-['Rubik:Light',sans-serif] font-light leading-[0] left-[calc(50%-407px)] text-[0px] text-black text-justify top-[947px] w-[815px] whitespace-pre-wrap">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal] mb-0 text-[16px]">environmental work</p>
        <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">We actively work to reduce our environmental impact. Through an efficient GPS-based dispatch system, we always send the vehicle that is closest to the customer. This reduces empty driving and contributes to a more sustainable taxi service.</p>
      </div>
      <div className="absolute capitalize font-['Rubik:Light',sans-serif] font-light leading-[0] left-[calc(50%-407px)] text-[0px] text-black text-justify top-[1047px] w-[815px] whitespace-pre-wrap">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal] mb-0 text-[16px]">BKY – Safe Operations</p>
        <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <p className="mb-0 text-[12px]">
          <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal]">{`To ensure a safe and reliable operation, we use `}</span>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[normal]">BKY (Dispatch Centers’ Control System).</span>
        </p>
        <p className="leading-[normal] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] text-[12px]">This system checks, among other things, that drivers have valid taxi driver licenses and that the company meets all legal requirements. This helps provide a safe and reliable taxi service for our customers. 🚖</p>
      </div>
      <Footer />
      <div className="absolute left-[1150px] size-[30px] top-[40px]" data-name="sweden 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSweden1} />
      </div>
    </div>
  );
}