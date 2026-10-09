"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Award, Check, Copy, Download, GitFork, GraduationCap, Mail, MapPin, Moon, Phone, Sparkles, Sun } from "lucide-react";
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
  const [lang,setLang] = useState<"en"|"vi">("en");
  const [light,setLight] = useState(false);
  const [copied,setCopied] = useState(false);
  const [selectedProject,setSelectedProject] = useState(0);
  const vi = lang === "vi";

  useEffect(()=>{ document.documentElement.dataset.theme="dark"; if(location.hash) history.replaceState(null,"",location.pathname+location.search); scrollTo(0,0); },[]);
  useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem("hq-language",lang)},[lang]);
  useEffect(()=>{
    const sections=document.querySelectorAll<HTMLElement>(".orbit-panel");
    sections.forEach(section=>section.classList.add("scroll-reveal"));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target)}
    }),{threshold:.16,rootMargin:"0px 0px -8% 0px"});
    sections.forEach(section=>observer.observe(section));
    return()=>observer.disconnect();
  },[]);
  const toggleTheme=()=>{const next=!light;setLight(next);document.documentElement.dataset.theme=next?"light":"dark"};
  const go=(index:number)=>document.querySelectorAll<HTMLElement>(".orbit-panel")[index]?.scrollIntoView({behavior:"smooth"});
  const copy=async()=>{await navigator.clipboard.writeText(contact.email);setCopied(true);setTimeout(()=>setCopied(false),1600)};

  return <main className="orbit-site">
    <section className="journey">
      <div className="journey-sticky">
        <header className="orbit-nav"><a onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="logo">HQ<span>.</span></a><nav>{nav.map((n,i)=><button key={n[0]} onClick={()=>go([1,2,3,4,5,6][i])}>{vi?n[1]:n[0]}</button>)}</nav><div><button onClick={()=>setLang(vi?"en":"vi")}>{vi?"EN":"VI"}</button><button onClick={toggleTheme} aria-label={light?"Dark mode":"Light mode"}>{light?<Moon/>:<Sun/>}</button><a href="/resume.pdf" download><Download/>CV</a></div></header>
        <div className="panel-track">
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

          <article id="Projects" className="orbit-panel project-orbit-panel">
            <div className="panel-index">04</div><div className="panel-copy project-orbit-copy"><span className="eyebrow">{vi?"DỰ ÁN NỔI BẬT":"FEATURED PROJECTS"}</span><div className="project-selector" role="tablist" aria-label={vi?"Chọn dự án":"Select project"}>{projects.map((project,index)=><button key={project.name} role="tab" aria-selected={selectedProject===index} className={selectedProject===index?"active":""} onClick={()=>setSelectedProject(index)}><span>0{index+1}</span>{project.name}</button>)}</div><div className="selected-project"><div className="project-count">0{selectedProject+1} / 0{projects.length}<span>{projects[selectedProject].year}</span></div><h2>{projects[selectedProject].name}</h2><p>{vi?viProjects[selectedProject]:projects[selectedProject].description}</p><div className="orbit-tags">{projects[selectedProject].stack.map(s=><span key={s}>{s}</span>)}</div><div className="panel-actions"><a href={projects[selectedProject].github} target="_blank" rel="noreferrer"><GitFork/>GitHub</a>{projects[selectedProject].live&&<a href={projects[selectedProject].live} target="_blank" rel="noreferrer">{vi?"Xem trực tiếp":"Live site"}<ArrowUpRight/></a>}</div></div></div>
          </article>

          <article id="Education" className="orbit-panel">
            <div className="panel-index">07</div><div className="panel-copy wide"><span className="eyebrow">{vi?"HỌC VẤN":"EDUCATION"}</span><h2>{vi?"Nền tảng kiến thức của tôi.":"Building a strong foundation."}</h2><div className="edu-orbit"><div><GraduationCap/><span>2021 — {vi?"NAY · DỰ KIẾN TỐT NGHIỆP 2027":"PRESENT · EXPECTED 2027"}</span><h3>Computing</h3><p>Greenwich Vietnam</p></div><div><Award/><span>{vi?"CHỨNG CHỈ NGOẠI NGỮ":"CERTIFICATION"}</span><h3>APTIS ESOL</h3><p>{vi?"Năng lực tiếng Anh bậc B2 theo khung CEFR":"CEFR B2 English Proficiency"}</p></div></div></div>
          </article>

          <article id="Contact" className="orbit-panel contact-orbit">
            <div className="panel-index">08</div><div className="panel-copy"><span className="eyebrow"><Sparkles/>{vi?"SẴN SÀNG ĐÓN NHẬN CƠ HỘI MỚI":"OPEN TO OPPORTUNITIES"}</span><h2>{vi?"Cùng nhau tạo nên một sản phẩm đáng giá.":"Let's build something together."}</h2><p>{vi?"Tôi đang tìm kiếm cơ hội ở vị trí lập trình viên phần mềm mới vào nghề, lập trình viên frontend hoặc full-stack. Nếu bạn thấy tôi phù hợp với đội ngũ của mình, hãy liên hệ với tôi.":"I'm open to Fresher Software Developer, Frontend Developer, and Full-stack Developer opportunities."}</p><div className="panel-actions"><a href={`mailto:${contact.email}`}><Mail/>{vi?"Liên hệ qua email":"Email me"}</a><a href={contact.github} target="_blank" rel="noreferrer"><GitFork/>GitHub</a></div><div className="orbit-contact"><span><MapPin/>{vi?"Thành phố Hồ Chí Minh, Việt Nam":contact.location}</span><a href={`tel:${contact.phone}`}><Phone/>{contact.phone}</a><button onClick={copy}><Copy/>{copied?(vi?"Đã sao chép địa chỉ email":"Copied!"):contact.email}</button></div></div>
          </article>
        </div>
      </div>
    </section>
  </main>
}
