import imgImage6 from "figma:asset/7fe016bca9cf211b26668a7b00c928193c731e4e.png";
import imgBlackCopy34X1 from "figma:asset/5ebefb298d45f77f13c9f3c3d21fc45a4fcd64f7.png";
import imgRoute2 from "figma:asset/5c5df6aedbfe84d35c3eeb82458b0cc2972de640.png";
import imgGps2 from "figma:asset/b91203040de8d9e2830e43c3d03522ed5edc70a4.png";
import imgCalendar2 from "figma:asset/71c8f9b1d75289bccd801730d48cdb10aa1d3ea0.png";
import imgUser2 from "figma:asset/8aa237a7f5aede14c1e28d9f958d1bdd0d9c5cd9.png";
import imgLuggage2 from "figma:asset/7872b6e84deef344b2e5b3147587e30662b974cb.png";
import imgToddler2 from "figma:asset/813fe78407af17963e4b54add032c87b1900d292.png";
import imgPawprint2 from "figma:asset/560e216b22c0a68f1591edc5029f1d965aba8ba3.png";
import imgSweden1 from "figma:asset/854638555389ddcac54d066581f19318be52d6b1.png";
import imgImage3 from "figma:asset/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
import imgImage4 from "figma:asset/e38317241a37517e2bff1d220908366e55f1d508.png";
import imgPhoneCall1 from "figma:asset/1a67329c0c4e11529c60e156b41c100da977b790.png";
import imgGps11 from "figma:asset/6b04569393a3d13d496db99adbdb9b8f07dd8d75.png";
import imgEmail1 from "figma:asset/983082677ce2adf17214594f1b83e51d932a2242.png";
import imgBlackCopy24X1 from "figma:asset/3c567e19fb5378f6ac3879e4a5d32c0222721849.png";
import imgTimeLeft2 from "figma:asset/25722d3a34844e7fa0546a18766dfd34c494c807.png";

function Background() {
  return (
    <div className="absolute contents left-0 top-0" data-name="background">
      <div className="absolute h-[583px] left-0 top-0 w-[1280px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[146.48%] left-0 max-w-none top-[-5.49%] w-full" src={imgImage6} />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[583px] left-0 top-0 w-[1280px]" />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-[61px] top-[-7px]" data-name="menu">
      <div className="absolute bg-[#efbf04] h-[30px] left-[945px] rounded-[30px] top-[40px] w-[106px]" />
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[961px] text-[12px] text-white top-[48px] whitespace-nowrap">BOOK A TAXI</p>
      <p className="absolute capitalize font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[819px] text-[12px] text-white top-[48px] whitespace-nowrap">price</p>
      <p className="absolute capitalize font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[658px] text-[12px] text-white top-[48px] whitespace-nowrap">about us</p>
      <div className="absolute left-[61px] size-[140px] top-[-7px]" data-name="black copy 3@4x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackCopy34X1} />
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="absolute contents left-[191px] top-[175px]" data-name="map">
      <div className="-translate-x-1/2 absolute bg-white h-[36px] left-[calc(50%-299px)] rounded-bl-[50px] rounded-tl-[50px] top-[229px] w-[300px]" />
      <div className="-translate-x-1/2 absolute bg-white h-[36px] left-[calc(50%+299px)] rounded-br-[50px] rounded-tr-[50px] top-[229px] w-[300px]" />
      <div className="-translate-x-1/2 absolute bg-white h-[36px] left-1/2 top-[229px] w-[290px]" />
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-226px)] text-[36px] text-white top-[175px] whitespace-nowrap">here would you like to go?</p>
      <div className="absolute left-[515px] size-[20px] top-[237px]" data-name="route 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRoute2} />
      </div>
      <div className="absolute left-[211px] size-[20px] top-[237px]" data-name="gps 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGps2} />
      </div>
      <div className="absolute left-[805px] size-[18px] top-[238px]" data-name="calendar 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCalendar2} />
      </div>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[243px] text-[12px] text-black top-[240px] whitespace-nowrap">uppsala</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[547px] text-[12px] text-black top-[240px] w-[72px]">arlanda</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[843px] text-[12px] text-black top-[240px] w-[143px]">Departure – now</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-[-7px]" data-name="header">
      <Background />
      <Menu />
      <Map />
    </div>
  );
}

function Text() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[700px]" data-name="text">
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-404px)] text-[12px] text-black text-justify top-[814px] w-[809px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">With Nordic Uppsala Taxi, you can easily get wherever you want – safely, securely, and flexibly. We offer reliable taxi rides with fixed prices, so you always know the cost of your trip before you even step into the car. Book your taxi quickly and conveniently today.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">Our goal is to make your taxi experience as simple and comfortable as possible. Whether you need a ride to work, the airport, a meeting, or for personal reasons, we are here to help. We serve both private passengers and corporate clients, adapting our services to your needs.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">We are based in Uppsala and offer taxi services throughout the city and surrounding areas. From short city rides to longer trips, we ensure you arrive safely and on time. Our drivers are experienced, service-oriented, and have excellent local knowledge.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">With Nordic Uppsala Taxi, you get a comfortable journey, professional service, and a taxi you can rely on – 24/7, all year round.</p>
      </div>
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[normal] left-[236px] text-[#efbf04] text-[40px] top-[700px] w-[723px]">Travel Comfortably and Safely with Nordic Uppsala Taxi</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[271px] top-[406px]">
      <div className="absolute left-[291px] size-[20px] top-[408px]" data-name="user 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUser2} />
      </div>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[319px] text-[35px] text-white top-[410px] whitespace-nowrap">+</p>
      <div className="absolute left-[291px] size-[20px] top-[434px]" data-name="luggage 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLuggage2} />
      </div>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[271px] text-[20px] text-white top-[406px] whitespace-nowrap">4</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[271px] text-[20px] text-white top-[432px] whitespace-nowrap">3</p>
    </div>
  );
}

function Login() {
  return (
    <div className="absolute contents left-[191px] top-[272px]" data-name="login">
      <div className="absolute bg-white h-[265px] left-[191px] rounded-bl-[50px] rounded-tl-[50px] top-[272px] w-[594px]" />
      <div className="absolute border-[0.5px] border-black border-solid h-[35px] left-[220px] rounded-[20px] top-[300px] w-[544px]" />
      <div className="absolute border-[0.5px] border-black border-solid h-[35px] left-[220px] rounded-[20px] top-[346px] w-[544px]" />
      <div className="absolute border-[0.5px] border-black border-solid h-[35px] left-[221px] rounded-[20px] top-[481px] w-[250px]" />
      <div className="absolute bg-[#efbf04] h-[35px] left-[514px] rounded-[20px] top-[482px] w-[250px]" />
      <div className="absolute bg-[#efbf04] h-[65px] left-[221px] rounded-[20px] top-[398px] w-[170px]" />
      <div className="absolute border-[0.5px] border-black border-solid h-[65px] left-[410px] rounded-[20px] top-[398px] w-[170px]" />
      <div className="absolute border-[0.5px] border-black border-solid h-[65px] left-[594px] rounded-[20px] top-[398px] w-[170px]" />
      <Group8 />
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[243px] text-[#b3b3b3] text-[12px] top-[311px] whitespace-nowrap">name</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[243px] text-[#b3b3b3] text-[12px] top-[357px] whitespace-nowrap">mobile number</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-18px)] text-[14px] text-white top-[491px] whitespace-nowrap">Book</p>
      <p className="absolute capitalize font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[309px] text-[14px] text-black top-[490px] whitespace-nowrap">fixed price</p>
      <div className="absolute left-[478px] size-[35px] top-[413px]" data-name="toddler 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgToddler2} />
      </div>
      <div className="absolute left-[662px] size-[35px] top-[413px]" data-name="pawprint 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPawprint2} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[695px] top-[1194px]">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[730px] text-[12px] text-black top-[1197px] whitespace-nowrap">018 800 50 50</p>
      <div className="absolute left-[695px] size-[20px] top-[1194px]" data-name="phone-call 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoneCall1} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[695px] top-[1230px]">
      <p className="absolute capitalize font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[730px] text-[12px] text-black top-[1230px] w-[126px] whitespace-pre-wrap">
        {`Murargatan 33 uppsala `}
        <br aria-hidden="true" />
        00:00 24/7
      </p>
      <div className="absolute left-[695px] size-[20px] top-[1234px]" data-name="gps (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGps11} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[695px] top-[1274px]">
      <p className="absolute font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[730px] text-[12px] text-black top-[1277px] whitespace-nowrap">bokning@nordicuppsalataxi.se</p>
      <div className="absolute left-[695px] size-[20px] top-[1274px]" data-name="email 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmail1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[138px] top-[1062px]">
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[515px] text-[14px] text-black top-[1109px] whitespace-nowrap">Sitelinks</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[743px] text-[14px] text-black top-[1109px] whitespace-nowrap">Contact</p>
      <p className="-translate-x-1/2 absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[1042.5px] text-[13px] text-black text-center top-[1109px] w-[167px]">App download (swedish)</p>
      <div className="absolute flex h-[201px] items-center justify-center left-[445px] top-[1091px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[201px] items-center justify-center left-[645px] top-[1091px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[201px] items-center justify-center left-[909px] top-[1091px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[695px] text-[12px] text-black top-[1146px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Booking</p>
        <p className="leading-[normal]">Mon–Sun | Open 24 hours</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[151px] text-[12px] text-black text-justify top-[1193px] w-[240px]">
        <p className="leading-[normal] mb-0">Uppsala Taxi is at the forefront when it comes to traffic management systems.</p>
        <p className="leading-[normal]">With us, you can book your taxi by phone, online, or through our mobile app.</p>
      </div>
      <div className="absolute h-[70px] left-[980px] top-[1134px] w-[125px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[33px] left-[986px] rounded-[5px] top-[1201px] w-[115px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
          <img alt="" className="absolute h-[159.3%] left-[-8.61%] max-w-none top-[-29.65%] w-[117.65%]" src={imgImage4} />
        </div>
      </div>
      <Group3 />
      <Group1 />
      <Group2 />
      <div className="absolute left-[138px] size-[170px] top-[1062px]" data-name="black copy 2@4x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackCopy24X1} />
      </div>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[521px] text-[12px] text-black top-[1153px] whitespace-nowrap">about us</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[521px] text-[12px] text-black top-[1183px] whitespace-nowrap">price</p>
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[521px] text-[12px] text-black top-[1213px] whitespace-nowrap">
        <span className="leading-[normal]">{`book `}</span>
        <span className="leading-[normal]">a</span>
        <span className="leading-[normal]">{` taxi`}</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[1029px]" data-name="footer">
      <div className="-translate-x-1/2 absolute bg-[#efbf04] border-black border-solid border-t-5 h-[383px] left-1/2 top-[1029px] w-[1280px]" />
      <Group />
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[821px] text-[12px] text-black text-justify top-[1377px] whitespace-nowrap">Travel Terms</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[926px] text-[12px] text-black text-justify top-[1377px] whitespace-nowrap">GDPR Policy</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[1040px] text-[12px] text-black text-justify top-[1377px] whitespace-nowrap">Safety Policy</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[1158px] text-[12px] text-black text-justify top-[1377px] whitespace-nowrap">Cookie Policy</p>
      <div className="absolute flex h-[20px] items-center justify-center left-[904px] top-[1374px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[20px] items-center justify-center left-[1018px] top-[1374px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute flex h-[20px] items-center justify-center left-[1132px] top-[1374px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <div className="absolute h-0 left-0 top-[1043.5px] w-[1280.004px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 3">
            <line id="Line 13" stroke="var(--stroke-0, black)" strokeDasharray="15 15" strokeLinecap="square" strokeWidth="3" x1="1.5" x2="1278.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[806px] top-[320px]">
      <div className="absolute bg-[#efbf04] h-[30px] left-[806px] rounded-bl-[20px] rounded-tl-[20px] top-[320px] w-[67px]" />
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[825px] text-[12px] text-white top-[328px] whitespace-nowrap">today</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[881px] text-[#474747] text-[12px] top-[328px] whitespace-nowrap">tomorrow</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[961px] text-[#474747] text-[12px] top-[328px] whitespace-nowrap">monday</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[1031px] text-[#474747] text-[12px] top-[328px] whitespace-nowrap">tuesday</p>
      <p className="absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[1131px] text-[#474747] text-[12px] top-[328px] whitespace-nowrap">later</p>
      <div className="absolute border-black border-l-[0.5px] border-solid h-[30px] left-[876px] top-[320px] w-[72px]" />
      <div className="absolute border-black border-l-[0.5px] border-solid h-[30px] left-[948px] top-[320px] w-[72px]" />
      <div className="absolute border-black border-l-[0.5px] border-solid h-[30px] left-[1020px] top-[320px] w-[72px]" />
      <div className="absolute border-black border-l-[0.5px] border-solid h-[30px] left-[1092px] top-[320px] w-[72px]" />
      <div className="absolute left-[1105px] size-[20px] top-[325px]" data-name="calendar 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCalendar2} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[875px] top-[383px]">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[normal] left-[937px] text-[#474747] text-[40px] top-[387px] whitespace-nowrap">06:13 pM</p>
      <div className="absolute border-[#474747] border-[0.5px] border-solid h-[55px] left-[875px] rounded-[30px] top-[383px] w-[250px]" />
      <div className="absolute left-[891px] size-[35px] top-[393px]" data-name="time-left 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTimeLeft2} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[839px] top-[481px]">
      <div className="absolute border-[#474747] border-[0.5px] border-solid h-[35px] left-[839px] rounded-[20px] top-[481px] w-[140px]" />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[872px] text-[14px] text-black top-[491px] whitespace-nowrap">Travel Now</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1012px] top-[481px]">
      <div className="absolute bg-[#efbf04] h-[35px] left-[1012px] rounded-[20px] top-[481px] w-[140px]" />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[normal] left-[1044px] text-[14px] text-white top-[491px] whitespace-nowrap">Select time</p>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute contents left-[789px] top-[272px]" data-name="time">
      <div className="absolute bg-white h-[265px] left-[789px] rounded-br-[50px] rounded-tr-[50px] top-[272px] w-[413px]" />
      <p className="absolute font-['Rubik:Light',sans-serif] font-light leading-[normal] left-[902px] text-[10px] text-black top-[446px] whitespace-nowrap">Pre-book at least 30 minutes before departure</p>
      <p className="-translate-x-1/2 absolute capitalize font-['Rubik:SemiBold',sans-serif] font-semibold leading-[normal] left-[882px] text-[14px] text-black text-center top-[287px] whitespace-nowrap">Select Departure Time</p>
      <Group7 />
      <Group6 />
      <Group4 />
      <Group5 />
    </div>
  );
}

export default function EnglishHomeTime() {
  return (
    <div className="bg-white relative size-full" data-name="English home time">
      <Header />
      <Text />
      <Login />
      <div className="absolute left-[1150px] size-[30px] top-[40px]" data-name="sweden 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSweden1} />
      </div>
      <Footer />
      <Time />
    </div>
  );
}