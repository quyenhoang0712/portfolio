"use client";
import { ArrowUpRight, Check, GitFork, MonitorUp } from "lucide-react";
import { projects } from "@/data/portfolio";
type Project = (typeof projects)[number];
const viProjects = [
  { description:"Nền tảng web tương tác full-stack mang đến trải nghiệm cá nhân hóa, kết nối cộng đồng, xác thực người dùng và phân tích mức độ tương tác.", features:["Xác thực và quản lý phiên đăng nhập","Xác minh email và tích hợp OAuth","Quản lý hồ sơ người dùng","Nội dung và tương tác cộng đồng","RESTful APIs","Phân tích mức độ tương tác","Phân quyền quản trị","Giới hạn tần suất gọi API","Tên miền riêng và triển khai trên Vercel"] },
  { description:"Nền tảng quản lý giáo dục MERN hỗ trợ hoạt động giảng dạy, xếp lịch, quản lý học viên và các hoạt động học tập.", features:["Bảng điều khiển theo từng vai trò","Quản lý khóa học và lớp học","Đăng ký học viên","Bài tập và điểm danh","Tài liệu học tập","Xác thực JWT","Phân quyền theo vai trò","Tài liệu API bằng Swagger"] },
  { description:"Ứng dụng quản lý dự án full-stack dành cho nghiệp vụ hành chính, theo dõi trạng thái dự án và quản lý nhà thầu.", features:["Bảng điều khiển quản lý dự án","Tạo và theo dõi dự án","RESTful backend APIs","Quản lý dữ liệu MongoDB","Phân quyền theo vai trò","Nghiệp vụ quản trị viên và nhà thầu","Kiểm tra tính hợp lệ của dữ liệu"] },
];
export function ProjectCard({ project, index, language }: { project: Project; index: number; language: "en" | "vi" }) {
  const localized = language === "vi" ? viProjects[index] : project;
  return <article className={`project-card ${project.featured ? "featured" : ""}`}>
    <div className={`project-preview preview-${index}`} aria-label={`Stylized placeholder preview for ${project.name}`}>
      <div className="browser-bar"><i/><i/><i/><span>{project.live ? "live product" : "preview placeholder"}</span></div>
      <div className="preview-ui"><div className="preview-side"/><div className="preview-main"><div className="preview-title"/><div className="preview-stats"><b/><b/><b/></div><div className="preview-chart"/></div></div>
      {!project.live && <span className="placeholder-label">{language === "vi" ? "Bản xem trước · ảnh thật sẽ được cập nhật" : "Project preview · screenshot coming soon"}</span>}
    </div>
    <div className="project-content">
      <div className="project-top"><span>0{index + 1} / {project.year}</span><span>{language === "vi" ? "Phụ trách phát triển Full-stack" : project.role}</span></div>
      <h3>{project.name}</h3><p>{localized.description}</p>
      <div className="tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
      <ul>{localized.features.map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul>
      <div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer"><GitFork size={18}/>GitHub<ArrowUpRight size={15}/></a>{project.live && <a className="primary" href={project.live} target="_blank" rel="noreferrer"><MonitorUp size={18}/>{language === "vi" ? "Xem trực tiếp" : "Live site"}<ArrowUpRight size={15}/></a>}</div>
    </div>
  </article>;
}
