"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Award, Check, Copy, Download, GitFork, GraduationCap, Mail, MapPin, Moon, Phone, Sparkles, Sun } from "lucide-react";
import { contact, projects, skillGroups } from "@/data/portfolio";

const nav = [
  ["About","Giới thiệu"],["Skills","Kỹ năng"],["Experience","Kinh nghiệm"],["Projects","Dự án"],["Education","Học vấn"],["Contact","Liên hệ"]
];
const viProjects = [
  "Nền tảng web tương tác được phát triển theo mô hình full-stack, tập trung vào trải nghiệm cá nhân, kết nối cộng đồng, quản lý tài khoản và theo dõi mức độ tương tác.",
  "Hệ thống quản lý trung tâm gia sư xây dựng trên MERN Stack, hỗ trợ tổ chức lớp học, xếp lịch, quản lý học viên và theo dõi quá trình học tập.",
  "Ứng dụng quản lý dự án dành cho công tác điều hành, theo dõi tiến độ và phối hợp giữa quản trị viên với nhà thầu."
];

export default function Home(){
  const journey = useRef<HTMLDivElement>(null);
  const snapLock = useRef(false);
  const [lang,setLang] = useState<"en"|"vi">("en");
  const [languageChosen,setLanguageChosen] = useState(false);
  const [launching,setLaunching] = useState(false);
  const [light,setLight] = useState(false);
  const [copied,setCopied] = useState(false);
  const vi = lang === "vi";
  const { scrollYProgress } = useScroll({ target: journey, offset:["start start","end end"] });
  const smooth = useSpring(scrollYProgress,{stiffness:190,damping:38,mass:.55});
  const x = useTransform(smooth,[0,1],["0%","-88.888%"]);
  const globeRotate = useTransform(smooth,[0,1],[0,720]);
  const progress = useSpring(scrollYProgress,{stiffness:120,damping:28});

  useEffect(()=>{ const isLight=localStorage.getItem("hq-theme")==="light"; setLight(isLight); document.documentElement.dataset.theme=isLight?"light":"dark"; if(location.hash) history.replaceState(null,"",location.pathname+location.search); scrollTo(0,0); },[]);
  useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem("hq-language",lang)},[lang]);
  const toggleTheme=()=>{const n=!light;setLight(n);document.documentElement.dataset.theme=n?"light":"dark";localStorage.setItem("hq-theme",n?"light":"dark")};
  const chooseLanguage=(value:"en"|"vi")=>{setLang(value);setLanguageChosen(true)};
  const begin=()=>{setLaunching(true);setTimeout(()=>journey.current?.scrollIntoView({behavior:"smooth"}),620);setTimeout(()=>setLaunching(false),1500)};
  const go=(index:number)=>{if(!journey.current)return;const start=journey.current.offsetTop;const distance=journey.current.offsetHeight-innerHeight;scrollTo({top:start+(index/8)*distance,behavior:"smooth"})};
  useEffect(()=>{
    const onWheel=(event:WheelEvent)=>{
      if(innerWidth<=800||!journey.current||Math.abs(event.deltaY)<12)return;
      const start=journey.current.offsetTop;
      const end=start+journey.current.offsetHeight-innerHeight;
      if(scrollY<start-2||scrollY>end+2)return;
      const current=Math.round(((scrollY-start)/(end-start))*8);
      if((current===0&&event.deltaY<0)||(current===8&&event.deltaY>0))return;
      event.preventDefault();
      if(snapLock.current)return;
      snapLock.current=true;
      go(Math.max(0,Math.min(8,current+(event.deltaY>0?1:-1))));
      setTimeout(()=>{snapLock.current=false},720);
    };
    addEventListener("wheel",onWheel,{passive:false});
    return()=>removeEventListener("wheel",onWheel);
  },[]);
  const copy=async()=>{await navigator.clipboard.writeText(contact.email);setCopied(true);setTimeout(()=>setCopied(false),1600)};

  return <main className="orbit-site">
    <section className={`portal ${languageChosen?"ready":""} ${launching?"launching":""}`}>
      <div className="star-field"/><div className="portal-copy"><span>HQ / PORTFOLIO 2026</span>{!languageChosen?<><h1 className="language-title">Choose your language.<strong> Chọn ngôn ngữ.</strong></h1><p>Select a language to begin your journey.<br/>Hãy chọn ngôn ngữ bạn muốn sử dụng.</p><div className="language-choice"><button onClick={()=>chooseLanguage("en")}><b>EN</b><span>English</span></button><button onClick={()=>chooseLanguage("vi")}><b>VI</b><span>Tiếng Việt</span></button></div></>:<><h1>{vi?"Khám phá Portfolio của":"Explore"}<strong> {vi?"Quyền.":"Quyen's Portfolio."}</strong></h1><p>{vi?"Nơi tôi chia sẻ những kỹ năng, kinh nghiệm và các sản phẩm phần mềm đã thực hiện trong hành trình trở thành lập trình viên chuyên nghiệp.":"Discover the skills, experience, and software projects behind my journey as a developer."}</p><button className="start-journey" onClick={begin}>{vi?"Khám phá Portfolio":"Explore Portfolio"}<ArrowDown/></button><button className="change-language" onClick={()=>setLanguageChosen(false)}>{vi?"Đổi ngôn ngữ":"Change language"}</button></>}</div>
      <div className="software-core" aria-hidden="true">
        <div className="core-grid"/><span className="core-line line-a"/><span className="core-line line-b"/><span className="core-line line-c"/><span className="core-line line-d"/>
        <div className="code-console"><div className="console-top"><i/><i/><i/><span>portfolio.tsx</span></div><pre><b>const</b> developer = &#123;{`\n`}  name: <em>&quot;Quyen&quot;</em>,{`\n`}  stack: <em>[&quot;React&quot;, &quot;Node&quot;]</em>,{`\n`}  ready: <strong>true</strong>{`\n`}&#125;;</pre><div className="console-status"><i/> system ready</div></div>
        <span className="core-node node-react">React</span><span className="core-node node-api">REST API</span><span className="core-node node-node">Node.js</span><span className="core-node node-db">MongoDB</span>
      </div>
      <div className="portal-controls"><button onClick={toggleTheme}>{light?<Moon/>:<Sun/>}</button></div>
    </section>

    <section ref={journey} className="journey">
      <div className="journey-sticky">
        <motion.div className="journey-progress" style={{scaleX:progress}}/>
        <header className="orbit-nav"><a onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="logo">HQ<span>.</span></a><nav>{nav.map((n,i)=><button key={n[0]} onClick={()=>go(i)}>{vi?n[1]:n[0]}</button>)}</nav><div><button onClick={()=>setLang(vi?"en":"vi")}>{vi?"EN":"VI"}</button><button onClick={toggleTheme}>{light?<Moon/>:<Sun/>}</button><a href="/resume.pdf" download><Download/>CV</a></div></header>
        <motion.div className="journey-core" style={{rotate:globeRotate}} aria-hidden="true"><span>&#123; &#125;</span><i/><b/><em/></motion.div>
        <motion.div className="panel-track" style={{x}}>
          <article className="orbit-panel intro-panel">
            <div className="panel-index">00</div><div className="panel-copy"><span className="eyebrow">{vi?"BẮT ĐẦU HÀNH TRÌNH":"BEGIN THE JOURNEY"}</span><h2>{vi?"Xin chào, tôi là":"Hi, I'm"} <em>Quyen.</em></h2><h3>{vi?"Lập trình viên phần mềm mới vào nghề":"Fresher Software Developer"}</h3><p>{vi?"Tôi phát triển các ứng dụng web bằng React.js, Node.js và MongoDB, chú trọng vào trải nghiệm người dùng, tính ổn định và khả năng ứng dụng thực tế.":"I build modern web applications with React.js, Node.js, and MongoDB, turning ideas into functional, user-friendly digital experiences."}</p><div className="panel-actions"><button onClick={()=>go(1)}>{vi?"Xem thêm về tôi":"Keep exploring"}<ArrowUpRight/></button><a href="/resume.pdf" download><Download/>{vi?"Tải CV":"Download CV"}</a></div></div>
          </article>

          <article id="About" className="orbit-panel">
            <div className="panel-index">01</div><div className="panel-copy wide"><span className="eyebrow">{vi?"GIỚI THIỆU":"ABOUT"}</span><h2>{vi?"Từ ý tưởng đến một sản phẩm chỉn chu.":"Turning ideas into reliable software."}</h2><div className="two-col"><p>{vi?"Tôi là một lập trình viên phần mềm trẻ, đã trực tiếp xây dựng nhiều ứng dụng web từ giao diện đến máy chủ. Tôi yêu thích việc tạo ra giao diện linh hoạt trên nhiều thiết bị, kết nối API và dùng công nghệ để giải quyết những bài toán thực tế.":"I'm a software developer with hands-on experience building full-stack web applications. I enjoy developing responsive interfaces, integrating RESTful APIs, and solving real-world problems through software."}</p><p>{vi?"Tôi làm việc chủ yếu với React.js, Node.js, Express.js và MongoDB. Mỗi dự án là cơ hội để tôi hoàn thiện tư duy kỹ thuật, viết mã tốt hơn và tiến gần hơn đến mục tiêu trở thành một lập trình viên chuyên nghiệp.":"My technical background includes React.js, Node.js, Express.js, and MongoDB. I'm actively improving my engineering skills and looking for opportunities to grow professionally."}</p></div></div>
          </article>

          <article id="Skills" className="orbit-panel skills-panel">
            <div className="panel-index">02</div><div className="panel-copy wide"><span className="eyebrow">{vi?"KỸ NĂNG CHUYÊN MÔN":"TOOLKIT"}</span><h2>{vi?"Những công nghệ tôi sử dụng.":"Technologies I work with."}</h2><div className="orbit-skills">{skillGroups.map((g,i)=><div key={g.title}><b>{vi?["Ngôn ngữ lập trình","Phát triển giao diện","Phát triển máy chủ","Cơ sở dữ liệu","Công cụ phát triển","Kiến thức nền tảng"][i]:g.title}</b>{g.skills.map(s=><span key={s}>{s}</span>)}</div>)}</div></div>
          </article>

          <article id="Experience" className="orbit-panel">
            <div className="panel-index">03</div><div className="panel-copy wide"><span className="eyebrow">{vi?"KINH NGHIỆM LÀM VIỆC":"EXPERIENCE"}</span><h2>Patecan</h2><div className="experience-orbit"><div><span>{vi?"THÁNG 4 — THÁNG 6/2025":"APR — JUN 2025"}</span><h3>{vi?"Thực tập sinh phát triển Frontend":"Frontend Developer Intern"}</h3><p>{vi?"Trong kỳ thực tập, tôi tham gia phát triển tính năng bằng React.js, kết nối RESTful API, xử lý dữ liệu trả về và hoàn thiện các component dùng chung.":"Developed React.js features, integrated RESTful APIs, handled dynamic data, and improved reusable components."}</p></div><ul>{(vi?["Xây dựng giao diện","Kết nối và xử lý API","Phát triển component dùng chung","Hiển thị dữ liệu động"]:["Interface development","API integration","Reusable components","Dynamic data handling"]).map(x=><li key={x}><Check/>{x}</li>)}</ul></div></div>
          </article>

          {projects.map((p,i)=><article key={p.name} id={i===0?"Projects":undefined} className="orbit-panel project-orbit-panel">
            <div className="panel-index">0{i+4}</div><div className="project-orbit-visual"><span>{p.year}</span><div className="mini-window"><i/><i/><i/><b>{p.name.slice(0,2)}</b></div></div><div className="panel-copy project-orbit-copy"><span className="eyebrow">{vi?"DỰ ÁN NỔI BẬT":"FEATURED PROJECT"} · 0{i+1}</span><h2>{p.name}</h2><p>{vi?viProjects[i]:p.description}</p><div className="orbit-tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="panel-actions"><a href={p.github} target="_blank" rel="noreferrer"><GitFork/>GitHub</a>{p.live&&<a href={p.live} target="_blank" rel="noreferrer">{vi?"Xem trực tiếp":"Live site"}<ArrowUpRight/></a>}</div></div>
          </article>)}

          <article id="Education" className="orbit-panel">
            <div className="panel-index">07</div><div className="panel-copy wide"><span className="eyebrow">{vi?"HỌC VẤN":"EDUCATION"}</span><h2>{vi?"Nền tảng kiến thức của tôi.":"Building a strong foundation."}</h2><div className="edu-orbit"><div><GraduationCap/><span>2021 — {vi?"NAY · DỰ KIẾN TỐT NGHIỆP 2027":"PRESENT · EXPECTED 2027"}</span><h3>Computing</h3><p>Greenwich Vietnam</p></div><div><Award/><span>{vi?"CHỨNG CHỈ NGOẠI NGỮ":"CERTIFICATION"}</span><h3>APTIS ESOL</h3><p>{vi?"Năng lực tiếng Anh bậc B2 theo khung CEFR":"CEFR B2 English Proficiency"}</p></div></div></div>
          </article>

          <article id="Contact" className="orbit-panel contact-orbit">
            <div className="panel-index">08</div><div className="panel-copy"><span className="eyebrow"><Sparkles/>{vi?"SẴN SÀNG ĐÓN NHẬN CƠ HỘI MỚI":"OPEN TO OPPORTUNITIES"}</span><h2>{vi?"Cùng nhau tạo nên một sản phẩm đáng giá.":"Let's build something together."}</h2><p>{vi?"Tôi đang tìm kiếm cơ hội ở vị trí lập trình viên phần mềm mới vào nghề, lập trình viên frontend hoặc full-stack. Nếu bạn thấy tôi phù hợp với đội ngũ của mình, hãy liên hệ với tôi.":"I'm open to Fresher Software Developer, Frontend Developer, and Full-stack Developer opportunities."}</p><div className="panel-actions"><a href={`mailto:${contact.email}`}><Mail/>{vi?"Liên hệ qua email":"Email me"}</a><a href={contact.github} target="_blank" rel="noreferrer"><GitFork/>GitHub</a></div><div className="orbit-contact"><span><MapPin/>{vi?"Thành phố Hồ Chí Minh, Việt Nam":contact.location}</span><a href={`tel:${contact.phone}`}><Phone/>{contact.phone}</a><button onClick={copy}><Copy/>{copied?(vi?"Đã sao chép địa chỉ email":"Copied!"):contact.email}</button></div></div>
          </article>
        </motion.div>
        <div className="journey-hint"><span>{vi?"CUỘN TỪNG BƯỚC ĐỂ KHÁM PHÁ":"SCROLL ONE STEP AT A TIME"}</span><i/></div>
      </div>
    </section>
  </main>
}
