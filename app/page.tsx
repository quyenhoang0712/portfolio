"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Award, Check, Copy, Download, GitFork, GraduationCap, Mail, MapPin, Moon, Phone, Sparkles, Sun } from "lucide-react";
import { contact, projects, skillGroups } from "@/data/portfolio";

const nav = [
  ["About","Giới thiệu"],["Skills","Kỹ năng"],["Experience","Kinh nghiệm"],["Projects","Dự án"],["Education","Học vấn"],["Contact","Liên hệ"]
];
const viProjects = [
  "Nền tảng web full-stack với trải nghiệm cá nhân hóa, tương tác cộng đồng, xác thực người dùng và phân tích mức độ tương tác.",
  "Nền tảng quản lý giáo dục MERN hỗ trợ giảng dạy, xếp lịch, quản lý học viên và hoạt động học tập.",
  "Ứng dụng quản lý dự án full-stack dành cho nghiệp vụ hành chính, theo dõi trạng thái và quản lý nhà thầu."
];

export default function Home(){
  const journey = useRef<HTMLDivElement>(null);
  const [lang,setLang] = useState<"en"|"vi">("en");
  const [languageChosen,setLanguageChosen] = useState(false);
  const [launching,setLaunching] = useState(false);
  const [light,setLight] = useState(false);
  const [copied,setCopied] = useState(false);
  const vi = lang === "vi";
  const { scrollYProgress } = useScroll({ target: journey, offset:["start start","end end"] });
  const smooth = useSpring(scrollYProgress,{stiffness:90,damping:24});
  const x = useTransform(smooth,[0,1],["0%","-88.888%"]);
  const globeRotate = useTransform(smooth,[0,1],[0,720]);
  const progress = useSpring(scrollYProgress,{stiffness:120,damping:28});

  useEffect(()=>{ const isLight=localStorage.getItem("hq-theme")==="light"; setLight(isLight); document.documentElement.dataset.theme=isLight?"light":"dark"; },[]);
  useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem("hq-language",lang)},[lang]);
  const toggleTheme=()=>{const n=!light;setLight(n);document.documentElement.dataset.theme=n?"light":"dark";localStorage.setItem("hq-theme",n?"light":"dark")};
  const chooseLanguage=(value:"en"|"vi")=>{setLang(value);setLanguageChosen(true)};
  const begin=()=>{setLaunching(true);setTimeout(()=>journey.current?.scrollIntoView({behavior:"smooth"}),620);setTimeout(()=>setLaunching(false),1500)};
  const go=(index:number)=>{if(!journey.current)return;const start=journey.current.offsetTop;const distance=journey.current.offsetHeight-innerHeight;scrollTo({top:start+(index/8)*distance,behavior:"smooth"})};
  const copy=async()=>{await navigator.clipboard.writeText(contact.email);setCopied(true);setTimeout(()=>setCopied(false),1600)};

  return <main className="orbit-site">
    <section className={`portal ${launching?"launching":""}`}>
      <div className="star-field"/><div className="portal-copy"><span>HQ / PORTFOLIO 2026</span>{!languageChosen?<><h1 className="language-title">Choose your language.<strong> Chọn ngôn ngữ.</strong></h1><p>Select a language to begin your journey.<br/>Chọn ngôn ngữ để bắt đầu hành trình.</p><div className="language-choice"><button onClick={()=>chooseLanguage("en")}><b>EN</b><span>English</span></button><button onClick={()=>chooseLanguage("vi")}><b>VI</b><span>Tiếng Việt</span></button></div></>:<><h1>{vi?"Khám phá thế giới":"Explore the world of"}<strong> Quyen.</strong></h1><p>{vi?"Một hành trình qua các kỹ năng, trải nghiệm và sản phẩm tôi đã xây dựng.":"A journey through the skills, experience, and products I have built."}</p><button className="start-journey" onClick={begin}>{vi?"Bắt đầu khám phá":"Start exploring"}<ArrowDown/></button><button className="change-language" onClick={()=>setLanguageChosen(false)}>{vi?"Chọn lại ngôn ngữ":"Change language"}</button></>}</div>
      <div className="hero-planet" aria-hidden="true"><div className="planet-grid"/><span className="orbit o1"/><span className="orbit o2"/><i className="satellite"/></div>
      <div className="portal-controls"><button onClick={toggleTheme}>{light?<Moon/>:<Sun/>}</button></div>
    </section>

    <section ref={journey} className="journey">
      <div className="journey-sticky">
        <motion.div className="journey-progress" style={{scaleX:progress}}/>
        <header className="orbit-nav"><a onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="logo">HQ<span>.</span></a><nav>{nav.map((n,i)=><button key={n[0]} onClick={()=>go(i)}>{vi?n[1]:n[0]}</button>)}</nav><div><button onClick={()=>setLang(vi?"en":"vi")}>{vi?"EN":"VI"}</button><button onClick={toggleTheme}>{light?<Moon/>:<Sun/>}</button><a href="/resume.pdf" download><Download/>CV</a></div></header>
        <motion.div className="journey-globe" style={{rotate:globeRotate}} aria-hidden="true"><div/><i/><b/></motion.div>
        <motion.div className="panel-track" style={{x}}>
          <article className="orbit-panel intro-panel">
            <div className="panel-index">00</div><div className="panel-copy"><span className="eyebrow">{vi?"BẮT ĐẦU HÀNH TRÌNH":"BEGIN THE JOURNEY"}</span><h2>{vi?"Xin chào, tôi là":"Hi, I'm"} <em>Quyen.</em></h2><h3>{vi?"Lập trình viên phần mềm Fresher":"Fresher Software Developer"}</h3><p>{vi?"Tôi xây dựng ứng dụng web hiện đại với React.js, Node.js và MongoDB, biến ý tưởng thành những trải nghiệm số hữu ích và thân thiện.":"I build modern web applications with React.js, Node.js, and MongoDB, turning ideas into functional, user-friendly digital experiences."}</p><div className="panel-actions"><button onClick={()=>go(1)}>{vi?"Tiếp tục khám phá":"Keep exploring"}<ArrowUpRight/></button><a href="/resume.pdf" download><Download/>{vi?"Tải CV":"Download CV"}</a></div></div>
          </article>

          <article id="About" className="orbit-panel">
            <div className="panel-index">01</div><div className="panel-copy wide"><span className="eyebrow">{vi?"GIỚI THIỆU":"ABOUT"}</span><h2>{vi?"Biến ý tưởng thành phần mềm đáng tin cậy.":"Turning ideas into reliable software."}</h2><div className="two-col"><p>{vi?"Tôi là một lập trình viên phần mềm có kinh nghiệm thực tế trong việc xây dựng các ứng dụng web full-stack. Tôi yêu thích việc tạo giao diện responsive, tích hợp RESTful API và giải quyết các vấn đề thực tế bằng phần mềm.":"I'm a software developer with hands-on experience building full-stack web applications. I enjoy developing responsive interfaces, integrating RESTful APIs, and solving real-world problems through software."}</p><p>{vi?"Nền tảng kỹ thuật của tôi gồm React.js, Node.js, Express.js và MongoDB. Tôi đang không ngừng nâng cao kỹ năng và tìm kiếm cơ hội phát triển chuyên nghiệp.":"My technical background includes React.js, Node.js, Express.js, and MongoDB. I'm actively improving my engineering skills and looking for opportunities to grow professionally."}</p></div></div>
          </article>

          <article id="Skills" className="orbit-panel skills-panel">
            <div className="panel-index">02</div><div className="panel-copy wide"><span className="eyebrow">{vi?"BỘ CÔNG CỤ":"TOOLKIT"}</span><h2>{vi?"Công nghệ tôi sử dụng.":"Technologies I work with."}</h2><div className="orbit-skills">{skillGroups.map((g,i)=><div key={g.title}><b>{vi?["Ngôn ngữ","Frontend","Backend","Cơ sở dữ liệu","Công cụ","Kiến thức"][i]:g.title}</b>{g.skills.map(s=><span key={s}>{s}</span>)}</div>)}</div></div>
          </article>

          <article id="Experience" className="orbit-panel">
            <div className="panel-index">03</div><div className="panel-copy wide"><span className="eyebrow">{vi?"KINH NGHIỆM":"EXPERIENCE"}</span><h2>Patecan</h2><div className="experience-orbit"><div><span>{vi?"04 — 06/2025":"APR — JUN 2025"}</span><h3>{vi?"Thực tập sinh Frontend Developer":"Frontend Developer Intern"}</h3><p>{vi?"Phát triển tính năng React.js, tích hợp RESTful API, xử lý dữ liệu động và cải thiện các component tái sử dụng.":"Developed React.js features, integrated RESTful APIs, handled dynamic data, and improved reusable components."}</p></div><ul>{(vi?["Phát triển giao diện","Tích hợp API","Component tái sử dụng","Xử lý dữ liệu động"]:["Interface development","API integration","Reusable components","Dynamic data handling"]).map(x=><li key={x}><Check/>{x}</li>)}</ul></div></div>
          </article>

          {projects.map((p,i)=><article key={p.name} id={i===0?"Projects":undefined} className="orbit-panel project-orbit-panel">
            <div className="panel-index">0{i+4}</div><div className="project-orbit-visual"><span>{p.year}</span><div className="mini-window"><i/><i/><i/><b>{p.name.slice(0,2)}</b></div></div><div className="panel-copy project-orbit-copy"><span className="eyebrow">{vi?"DỰ ÁN NỔI BẬT":"FEATURED PROJECT"} · 0{i+1}</span><h2>{p.name}</h2><p>{vi?viProjects[i]:p.description}</p><div className="orbit-tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="panel-actions"><a href={p.github} target="_blank" rel="noreferrer"><GitFork/>GitHub</a>{p.live&&<a href={p.live} target="_blank" rel="noreferrer">{vi?"Xem trực tiếp":"Live site"}<ArrowUpRight/></a>}</div></div>
          </article>)}

          <article id="Education" className="orbit-panel">
            <div className="panel-index">07</div><div className="panel-copy wide"><span className="eyebrow">{vi?"HỌC VẤN":"EDUCATION"}</span><h2>{vi?"Xây dựng nền tảng vững chắc.":"Building a strong foundation."}</h2><div className="edu-orbit"><div><GraduationCap/><span>2021 — {vi?"HIỆN TẠI · DỰ KIẾN 2027":"PRESENT · EXPECTED 2027"}</span><h3>Computing</h3><p>Greenwich Vietnam</p></div><div><Award/><span>{vi?"CHỨNG CHỈ":"CERTIFICATION"}</span><h3>APTIS ESOL</h3><p>{vi?"Trình độ tiếng Anh CEFR B2":"CEFR B2 English Proficiency"}</p></div></div></div>
          </article>

          <article id="Contact" className="orbit-panel contact-orbit">
            <div className="panel-index">08</div><div className="panel-copy"><span className="eyebrow"><Sparkles/>{vi?"SẴN SÀNG CHO CƠ HỘI MỚI":"OPEN TO OPPORTUNITIES"}</span><h2>{vi?"Hãy cùng nhau tạo nên điều tuyệt vời.":"Let's build something together."}</h2><p>{vi?"Tôi đang tìm kiếm cơ hội Fresher Software Developer, Frontend Developer hoặc Full-stack Developer.":"I'm open to Fresher Software Developer, Frontend Developer, and Full-stack Developer opportunities."}</p><div className="panel-actions"><a href={`mailto:${contact.email}`}><Mail/>{vi?"Gửi email":"Email me"}</a><a href={contact.github} target="_blank" rel="noreferrer"><GitFork/>GitHub</a></div><div className="orbit-contact"><span><MapPin/>{vi?"TP. Hồ Chí Minh, Việt Nam":contact.location}</span><a href={`tel:${contact.phone}`}><Phone/>{contact.phone}</a><button onClick={copy}><Copy/>{copied?(vi?"Đã sao chép!":"Copied!"):contact.email}</button></div></div>
          </article>
        </motion.div>
        <div className="journey-hint"><span>{vi?"CUỘN ĐỂ XOAY":"SCROLL TO ORBIT"}</span><i/></div>
      </div>
    </section>
  </main>
}
