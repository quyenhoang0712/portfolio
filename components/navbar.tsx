"use client";
import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/data/portfolio";
export function Navbar() {
  const [open, setOpen] = useState(false); const [light, setLight] = useState(false); const [active, setActive] = useState("Home"); const [hasResume, setHasResume] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("hq-theme") === "light"; setLight(saved); document.documentElement.dataset.theme = saved ? "light" : "dark"; fetch("/resume.pdf", { method: "HEAD" }).then(r => setHasResume(r.ok)).catch(() => {}); }, []);
  useEffect(() => { const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55%" }); navigation.forEach(x => { const el = document.getElementById(x); if (el) obs.observe(el); }); return () => obs.disconnect(); }, []);
  const toggle = () => { const next = !light; setLight(next); document.documentElement.dataset.theme = next ? "light" : "dark"; localStorage.setItem("hq-theme", next ? "light" : "dark"); };
  return <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation"><a className="logo" href="#Home">HQ<span>.</span></a><div className={`nav-links ${open ? "open" : ""}`}>{navigation.map(x => <a key={x} className={active === x ? "active" : ""} href={`#${x}`} onClick={() => setOpen(false)}>{x}</a>)}</div><div className="nav-actions"><button onClick={toggle} aria-label="Toggle color theme">{light ? <Moon/> : <Sun/>}</button>{hasResume && <a className="cv-link" href="/resume.pdf" download><Download/>CV</a>}<button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div></nav></header>;
}
