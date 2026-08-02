"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    no: "01",
    title: "DocuMind AI",
    tech: "Python · Flask · LangChain · FAISS",
    text: "A retrieval-augmented PDF assistant that extracts document content, builds a searchable vector index and answers questions using relevant context.",
  },
  {
    no: "02",
    title: "Vision AI",
    tech: "Python · Flask · BLIP · OpenCV",
    text: "A computer vision web application that detects visual content and generates natural-language image captions through a clean, modular interface.",
  },
  {
    no: "03",
    title: "Face Recognition System",
    tech: "Python · OpenCV · Computer Vision",
    text: "A real-time face detection and recognition system using Haar Cascade classifiers, image preprocessing and live camera input.",
  },
  {
    no: "04",
    title: "Developer Portfolio",
    tech: "React · TypeScript · Responsive UI",
    text: "A responsive personal portfolio focused on accessible interactions, purposeful motion and a polished recruiter-facing presentation.",
  },
];

const skills = [
  ["Programming", "Java, Python, C, C++, SQL"],
  ["Frontend", "HTML, CSS, JavaScript, TypeScript, React, Next.js"],
  ["Backend & Data", "REST APIs, Flask, MySQL, PostgreSQL, SQLite"],
  ["AI & ML", "OpenCV, Scikit-learn, BLIP, Machine Learning"],
  ["Cloud & Tools", "AWS S3, EC2, Git, GitHub, Linux, VS Code"],
  ["Foundations", "DSA, OOP, DBMS, Operating Systems, Networks"],
];

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenu(false);

  return (
    <>
      <div className={`intro ${intro ? "" : "intro--done"}`} aria-hidden={!intro}>
        <div className="intro__line" />
        <p>Portfolio · 2026</p>
        <h1><span>Niharika</span> Vemula</h1>
        <div className="intro__loader"><i /></div>
      </div>

      <main className={intro ? "page page--waiting" : "page"}>
        <nav className="nav">
          <a className="brand" href="#home" aria-label="Niharika Vemula home">
            NV<span>.</span>
          </a>
          <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            <span /><span />
          </button>
          <div className={`navLinks ${menu ? "navLinks--open" : ""}`}>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <a className="pill navCta" href="mailto:vemulaniharika62@gmail.com">
            Let&apos;s talk <span>↗</span>
          </a>
        </nav>

        <section className="hero" id="home">
          <div className="heroGlow heroGlow--one" />
          <div className="heroGlow heroGlow--two" />
          <p className="availability"><i /> Available for opportunities</p>
          <div className="heroTitle">
            <span className="outline">NIHARIKA</span>
            <span>VEMULA</span>
          </div>

          <div className="heroInfo">
            <div className="heroCopy reveal">
              <p className="eyebrow">Full Stack Developer · AI/ML Student</p>
              <h2>I build useful web products and intelligent software experiences.</h2>
              <div className="heroActions">
                <a className="pill pill--dark" href="#projects">Explore work <span>↘</span></a>
                <a className="textLink" href="#contact">Contact me <span>↗</span></a>
              </div>
            </div>

            <div className="portrait reveal">
              <div className="portraitRing" />
              <div className="portraitCard">
                <img
                  src="/niharika-profile.jpg"
                  alt="Niharika Vemula"
                  className="portraitPhoto"
                />
                <small className="portraitLabel">NIHARIKA VEMULA</small>
              </div>
              <span className="orbit orbit--1">AI</span>
              <span className="orbit orbit--2">DEV</span>
            </div>

            <div className="socialRail reveal">
              <a href="mailto:vemulaniharika62@gmail.com" aria-label="Email Niharika">
                <span>✉</span> Email
              </a>
              <a href="https://www.linkedin.com/in/niharika-vemula-68575b2b6" target="_blank" rel="noreferrer">
                <span>in</span> LinkedIn
              </a>
              <a href="https://github.com/niharikavemula344-byte" target="_blank" rel="noreferrer">
                <span>⌘</span> GitHub
              </a>
            </div>
          </div>
          <a className="scrollCue" href="#about">Scroll to discover <span>↓</span></a>
        </section>

        <section className="about section" id="about">
          <p className="sectionNumber">01 / ABOUT</p>
          <div className="aboutGrid">
            <h2>I turn ideas into <em>clear, useful</em> digital products.</h2>
            <div>
              <p>I&apos;m Niharika, a Computer Science student specializing in AI &amp; ML at Mohan Babu University. I build responsive full-stack applications, computer vision systems and practical AI products. I&apos;m seeking an internship where I can contribute to real software, learn from strong engineers and grow through ownership.</p>
              <div className="facts">
                <div><strong>86%</strong><span>B.Tech Score</span></div>
                <div><strong>04</strong><span>Featured Projects</span></div>
                <div><strong>2027</strong><span>Graduation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section blush" id="education">
          <p className="sectionNumber">02 / EDUCATION</p>
          <div className="sectionHeader">
            <h2>Learning, evolving,<br /><em>building forward.</em></h2>
          </div>
          <div className="timeline">
            <article>
              <span>2023 — 2027</span>
              <div><h3>Mohan Babu University</h3><p>B.Tech — CSE (AI &amp; ML)</p><small>86% · No active backlogs</small></div>
            </article>
            <article>
              <span>2021 — 2023</span>
              <div><h3>Sri Chaitanya Junior College</h3><p>Intermediate — MPC</p><small>Mathematics, Physics &amp; Chemistry</small></div>
            </article>
            <article>
              <span>2020 — 2021</span>
              <div><h3>Narayana Group of Schools</h3><p>Secondary School Certificate</p><small>Secured 98.3% in SSC Board Examinations</small></div>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="sectionNumber">03 / EXPERTISE</p>
          <div className="skillsHead">
            <h2>My creative<br /><em>toolkit.</em></h2>
            <p>A practical stack spanning full-stack development, AI foundations, databases, cloud services and core computer science.</p>
          </div>
          <div className="skillGrid">
            {skills.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <p className="sectionNumber">04 / SELECTED WORK</p>
          <div className="sectionHeader">
            <h2>Projects with<br /><em>purpose.</em></h2>
          </div>
          <div className="projectList">
            {projects.map((project) => (
              <article key={project.no}>
                <span className="projectNo">{project.no}</span>
                <div><p>{project.tech}</p><h3>{project.title}</h3><small>{project.text}</small></div>
                <span className="projectArrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section certificates">
          <p className="sectionNumber">05 / CERTIFICATES</p>
          <div className="certificateGrid">
            <article><span>Coursera · MathWorks</span><h3>Introduction to Computer Vision</h3><i>01</i></article>
            <article><span>Coursera</span><h3>Python Programming</h3><i>02</i></article>
            <article><span>Cloud Computing</span><h3>AWS Certification Course</h3><i>03</i></article>
          </div>
        </section>

        <footer id="contact">
          <p>Have a project, internship or opportunity in mind?</p>
          <h2>Let&apos;s create something<br /><em>meaningful together.</em></h2>
          <a className="footerMail" href="mailto:vemulaniharika62@gmail.com">
            vemulaniharika62@gmail.com <span>↗</span>
          </a>
          <div className="footerBottom">
            <span>© 2026 Niharika Vemula</span>
            <span>Tirupati, India · +91 9346686834</span>
            <div>
              <a href="https://www.linkedin.com/in/niharika-vemula-68575b2b6" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/niharikavemula344-byte" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
