"use client";
import { ArrowUpRight, Check, GitFork, MonitorUp } from "lucide-react";
import { projects } from "@/data/portfolio";
type Project = (typeof projects)[number];
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${project.featured ? "featured" : ""}`}>
    <div className={`project-preview preview-${index}`} aria-label={`Stylized placeholder preview for ${project.name}`}>
      <div className="browser-bar"><i/><i/><i/><span>{project.live ? "live product" : "preview placeholder"}</span></div>
      <div className="preview-ui"><div className="preview-side"/><div className="preview-main"><div className="preview-title"/><div className="preview-stats"><b/><b/><b/></div><div className="preview-chart"/></div></div>
      {!project.live && <span className="placeholder-label">Project preview · screenshot coming soon</span>}
    </div>
    <div className="project-content">
      <div className="project-top"><span>0{index + 1} / {project.year}</span><span>{project.role}</span></div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <div className="tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
      <ul>{project.features.map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul>
      <div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer"><GitFork size={18}/>GitHub<ArrowUpRight size={15}/></a>{project.live && <a className="primary" href={project.live} target="_blank" rel="noreferrer"><MonitorUp size={18}/>Live site<ArrowUpRight size={15}/></a>}</div>
    </div>
  </article>;
}
