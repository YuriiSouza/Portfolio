"use client";

import { useEffect, useRef } from "react";
import { initDevScrollEngine } from "@/lib/dev-scroll-engine";
import "./dev-portfolio.css";

const A = "/";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V9.99H5.67v8.35h2.67ZM7 8.84a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.5v-4.58c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67v8.35h2.67v-4.66c0-1.23.83-1.66 1.45-1.66.61 0 1.33.46 1.33 1.69v4.63h2.34Z"/></svg>
);

const projects = [
  { idx: "01", img: "vitalium-image.png", alt: "Vitalium", title: "Vitalium",
    desc: "Plataforma de monitoramento e acompanhamento médico que conecta pacientes, médicos e clínicas. Chat integrado, evolução clínica diária e relatórios gerados por IA.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Redis", "AWS", "IA Generativa"], links: [] },
  { idx: "02", img: "geosurvey-image.png", alt: "GeoSurvey", title: "GeoSurvey",
    desc: "SaaS multiempresa para gestão de sondagens geotécnicas. Relatórios SPT automáticos (NBR 6484:2020), controle de campo em tempo real e visualização geográfica dos furos.",
    tech: ["NestJS", "Next.js", "Prisma", "Mapbox", "Puppeteer", "S3"], links: [] },
  { idx: "03", img: "crm-image.png", alt: "ERP + CRM", title: "ERP + CRM Personalizado",
    desc: "Sistema ERP e CRM completo para 3 clientes, com landing pages dedicadas. Gestão de usuários, pedidos e estoque, com envio de pedidos via WhatsApp API oficial.",
    tech: ["Node.js", "Next.js", "NestJS", "MySQL", "WhatsApp API"],
    links: [{ type: "github", href: "https://github.com/YuriiSouza/pumock" }] },
  { idx: "04", img: "smartcash-image.png", alt: "SmartCash", title: "SmartCash — Venda de Ebooks",
    desc: "Plataforma completa para comercialização de ebooks: autenticação, pagamentos PIX e cartão, área do cliente com histórico e desconto automático no PIX.",
    tech: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "Mercado Pago"],
    links: [{ type: "github", href: "https://github.com/YuriiSouza/smartcash" }, { type: "demo", href: "https://smartcash-black.vercel.app" }] },
  { idx: "05", img: "seuInvestimento-image.png", alt: "SeuInvestimento", title: "SeuInvestimento",
    desc: "Solução completa e acessível para melhorar a experiência de investimento: informação clara, orientação personalizada e acompanhamento detalhado da carteira.",
    tech: ["Angular", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    links: [{ type: "github", href: "https://github.com/YuriiSouza/seuinvestimento_frontend" }] },
  { idx: "06", img: "joias-image.jpeg", alt: "E-commerce de Joias", title: "E-commerce de Joias",
    desc: "Plataforma de e-commerce focada em joias: catálogo, carrinho, checkout e integração de pagamento, com forte otimização para performance e SEO.",
    tech: ["React", "Next.js", "Tailwind", "Context API", "API de pagamento"],
    links: [{ type: "github", href: "https://github.com/YuriiSouza/jackson_pratas" }] },
  { idx: "07", img: "portfolio-image.png", alt: "Portfolio", title: "Portfolio",
    desc: "Plataforma de portfólio pessoal para exibir e compartilhar projetos, artigos e ideias de forma organizada e profissional.",
    tech: ["JavaScript", "Next.js", "Git"],
    links: [{ type: "github", href: "https://github.com/YuriiSouza/Portfolio" }, { type: "demo", href: "https://yuripeixoto.com" }] },
];

const certs = [
  { logo: "logo-universidade.png", dark: true, alt: "UniEvangélica", title: "Bacharelado em Engenharia de Software", org: "UniEvangélica", yr: "2025", d: "" },
  { logo: "anbima.png", dark: false, alt: "ANBIMA", title: "CPA — Certificação Profissional ANBIMA", org: "ANBIMA", yr: "2026", d: "d1" },
  { logo: "badge-SFC.png", dark: false, alt: "Scrum", title: "Scrum Fundamentals Certified", org: "SCRUMstudy", yr: "2024", d: "d2" },
  { logo: "cursoemvideo-logo.png", dark: false, alt: "Curso em Vídeo", title: "Python 3", org: "Curso em Vídeo", yr: "2022", d: "" },
  { logo: "cursoemvideo-logo.png", dark: false, alt: "Curso em Vídeo", title: "Web Development", org: "Curso em Vídeo", yr: "2021", d: "d1" },
  { logo: "logo-dataanalysis.png", dark: false, alt: "Data Science Academy", title: "Data Analysis", org: "Data Science Academy", yr: "2024", d: "d2" },
];

export default function DevPortfolio() {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanup = initDevScrollEngine(rootRef.current);
    return cleanup;
  }, []);

  return (
    <div className="dev-portfolio" ref={rootRef}>

      <div className="scroll-bar" id="scrollBar"></div>

      {/* NAV */}
      <nav className="nav" id="nav">
        <a className="nav-logo" href="#top"><span className="dot"></span>yuri.souza</a>
        <div className="nav-links" id="navLinks">
          <a href="#sobre">Sobre</a>
          <a href="#stack">Stack</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#certificacoes">Formação</a>
        </div>
        <a className="nav-cta" href="#contato">Contato</a>
      </nav>

      <span id="top"></span>

      {/* HERO */}
      <section className="hero-wrap" data-pin="hero">
        <div className="hero-stage" id="heroStage">
          <div className="hero-grid"></div>
          <div className="hero-glow" id="heroGlow"></div>
          <div className="hero-content" id="heroContent">
            <div className="hero-kicker">Goiás, Brasil · Fullstack &amp; Dados</div>
            <h1 className="hero-name">YURI&nbsp;SOUZA</h1>
            <p className="hero-role">Engenheiro de Software — <b>sistemas, automação e dados</b></p>
          </div>
          <div className="hero-cue" id="heroCue">
            <span>scroll</span>
            <span className="line"></span>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement-wrap" data-pin="statement">
        <div className="statement-stage">
          <p className="statement" id="statement" data-text="Eu transformo |processos de negócio| em software que escala — backend robusto, automações que economizam horas e dados que viram |decisão|."></p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="sobre">
        <div className="section-head reveal-right">
          <span className="eyebrow">01 — Sobre mim</span>
          <h2 className="section-title">Engenheiro com<br />mentalidade de produto.</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo-col reveal">
            <div className="about-photo">
              <img src={A + "me.jpeg"} alt="Yuri Souza" />
              <span className="badge">Yuri Souza · 2026</span>
            </div>
          </div>
          <div className="about-body">
            <p className="reveal">Desenvolvedor de software com foco em <strong>backend e dados</strong>, apaixonado por criar soluções que otimizam processos de gestão e negócios. Experiência com ERP, sistemas internos e automações que geram valor real para empresas.</p>
            <p className="reveal d1">Especializado em resolver <strong>problemas complexos</strong> com escalabilidade, segurança e performance. Combino conhecimento técnico com entendimento de processo de negócio para entregar sistemas que realmente fazem diferença.</p>
            <div className="about-tags reveal d2">
              <span className="tag">Backend</span>
              <span className="tag">Automação</span>
              <span className="tag">Sistemas de Gestão</span>
              <span className="tag">Análise de Dados</span>
              <span className="tag">Integração de APIs</span>
            </div>
            <div className="stats reveal d2">
              <div className="stat">
                <div className="num" data-count="5"><span className="val">0</span><span className="plus">+</span></div>
                <div className="lab">anos de experiência</div>
              </div>
              <div className="stat">
                <div className="num" data-count="15"><span className="val">0</span><span className="plus">+</span></div>
                <div className="lab">projetos entregues</div>
              </div>
              <div className="stat">
                <div className="num" data-count="3"><span className="val">0</span></div>
                <div className="lab">empresas atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="section" id="stack">
        <div className="section-head reveal-right">
          <span className="eyebrow">02 — Stack tecnológica</span>
          <h2 className="section-title">As ferramentas<br />que eu domino.</h2>
        </div>
        <div className="stack-grid">
          <div className="stack-card reveal">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg></div>
            <h3>Backend</h3>
            <div className="chips"><span className="chip">Node.js</span><span className="chip">Python</span><span className="chip">C#</span><span className="chip">Ruby on Rails</span><span className="chip">NestJS</span><span className="chip">Express</span><span className="chip">Django</span></div>
          </div>
          <div className="stack-card reveal d1">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
            <h3>Bancos de Dados</h3>
            <div className="chips"><span className="chip">PostgreSQL</span><span className="chip">MySQL</span><span className="chip">MongoDB</span><span className="chip">Redis</span><span className="chip">SQL Server</span><span className="chip">SQLite</span></div>
          </div>
          <div className="stack-card reveal d2">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg></div>
            <h3>APIs &amp; Integrações</h3>
            <div className="chips"><span className="chip">REST</span><span className="chip">Prisma</span><span className="chip">ERPs</span><span className="chip">CRMs</span><span className="chip">WhatsApp API</span><span className="chip">Mercado Pago</span></div>
          </div>
          <div className="stack-card reveal">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3M20 16v-7"/></svg></div>
            <h3>Análise de Dados</h3>
            <div className="chips"><span className="chip">Pandas</span><span className="chip">NumPy</span><span className="chip">Power BI</span><span className="chip">SQL Avançado</span><span className="chip">Looker Studio</span><span className="chip">Jupyter</span></div>
          </div>
          <div className="stack-card reveal d1">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Z"/></svg></div>
            <h3>DevOps &amp; Cloud</h3>
            <div className="chips"><span className="chip">Docker</span><span className="chip">AWS</span><span className="chip">Git</span><span className="chip">Linux</span><span className="chip">CI/CD</span><span className="chip">MinIO / S3</span></div>
          </div>
          <div className="stack-card reveal d2">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg></div>
            <h3>Web</h3>
            <div className="chips"><span className="chip">Next.js</span><span className="chip">React</span><span className="chip">TypeScript</span><span className="chip">Tailwind</span><span className="chip">Angular</span><span className="chip">UI/UX</span></div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-wrap" id="projetos" data-pin="projects">
        <div className="projects-pin">
          <div className="projects-head reveal">
            <div>
              <span className="eyebrow">03 — Projetos destacados</span>
              <h2 className="section-title" style={{ marginTop: "18px" }}>Coisas que eu construí.</h2>
            </div>
            <div className="projects-progress"><span id="projBar"></span></div>
          </div>
          <div className="projects-track" id="projTrack">
            {projects.map((p) => (
              <article className="proj-card" key={p.idx}>
                <div className="proj-shot"><span className="idx">{p.idx}</span><img src={A + p.img} alt={p.alt} /></div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="proj-tech">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                  {p.links.length > 0 && (
                    <div className="proj-links">
                      {p.links.map((l) => (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" key={l.href}>
                          {l.type === "github" ? <GitHubIcon /> : <ExternalIcon />}
                          {l.type === "github" ? "GitHub" : "Demo"}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experiencia">
        <div className="section-head reveal-right">
          <span className="eyebrow">04 — Experiência profissional</span>
          <h2 className="section-title">Onde eu deixei<br />minha marca.</h2>
        </div>
        <div className="exp">
          <div className="exp-line"><span className="fill" id="expFill"></span></div>

          <div className="exp-item reveal">
            <span className="exp-dot"></span>
            <div className="exp-period">2024 — Presente</div>
            <h3>Analista de Transporte e Dados Operacionais</h3>
            <div className="exp-co"><img src={A + "shopee.png"} alt="Shopee" />Shopee Express Brasil</div>
            <p className="desc">Análise e gestão operacional da malha logística de última milha: monitoramento de KPIs, gestão de motoristas parceiros, otimização de processos e soluções baseadas em dados para aumentar a eficiência e reduzir falhas nas entregas.</p>
            <div className="exp-tech"><span className="chip">Python</span><span className="chip">SQL</span><span className="chip">PostgreSQL</span><span className="chip">Power BI</span><span className="chip">Looker Studio</span><span className="chip">BI</span></div>
          </div>

          <div className="exp-item reveal">
            <span className="exp-dot"></span>
            <div className="exp-period">2023 — Presente</div>
            <h3>Analista de Dados</h3>
            <div className="exp-co"><img src={A + "logo-Ambev.png"} alt="ReGra" />ReGra Logística em Distribuição</div>
            <p className="desc">Desenvolvimento de ferramentas de gestão e automação de processos, com foco em otimização logística por análise de dados operacionais. Reduzi custos e aumentei lucratividade — otimização de consultas SQL melhorou a performance em <strong>60%</strong>.</p>
            <div className="exp-tech"><span className="chip">Python</span><span className="chip">PostgreSQL</span><span className="chip">Power BI</span></div>
          </div>

          <div className="exp-item reveal">
            <span className="exp-dot"></span>
            <div className="exp-period">2021 — 2023</div>
            <h3>Engenheiro de Software</h3>
            <div className="exp-co"><img src={A + "logo-ftt.png"} alt="FTT" />Fábrica de Tecnologias Turing — UniEVANGÉLICA</div>
            <p className="desc">Desenvolvimento de uma API RESTful completa para gestão de clínica veterinária: modelagem de dados, endpoints de clientes, animais, agendamentos e financeiro, integrações de notificação e otimização de performance do banco.</p>
            <div className="exp-tech"><span className="chip">Node.js</span><span className="chip">MongoDB</span><span className="chip">NestJS</span><span className="chip">Prisma</span><span className="chip">Redis</span><span className="chip">Git</span></div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section" id="caso">
        <div className="section-head reveal-right">
          <span className="eyebrow">05 — Estudo de caso</span>
          <h2 className="section-title">Dados que viram<br />decisão.</h2>
        </div>
        <div className="case reveal">
          <div className="case-visual">
            <img src={A + "ambev-project-image.png"} alt="Projeto Ambev" />
            <div className="veil"></div>
            <div className="tag-row"><span className="tag">Varejo · Revenda Ambev</span></div>
          </div>
          <div className="case-body">
            <h3>Análise de processos internos para uma revenda Ambev.</h3>
            <div className="case-block">
              <h4>O desafio</h4>
              <p>A revenda usava um questionário para avaliar o conhecimento dos colaboradores sobre os procedimentos, mas as respostas ficavam dispersas — difícil analisar resultados e identificar os pontos de maior impacto.</p>
            </div>
            <div className="case-block">
              <h4>A solução</h4>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5"/></svg>Ferramenta que reúne todas as respostas em um único lugar.</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5"/></svg>Dados apresentados de forma visual e direta aos líderes.</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5"/></svg>Resultados claros que orientam estratégias de correção.</li>
              </ul>
            </div>
            <div className="case-block">
              <h4>Resultados</h4>
              <div className="case-results">
                <div><b>↓ Falhas</b>Processos otimizados</div>
                <div><b>↑ Qualidade</b>Mais produtividade</div>
                <div><b>Data-driven</b>Decisão por dados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" id="certificacoes">
        <div className="section-head reveal-right">
          <span className="eyebrow">06 — Certificações &amp; formação</span>
          <h2 className="section-title">Base sólida,<br />sempre aprendendo.</h2>
        </div>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div className={"cert-card reveal" + (c.d ? " " + c.d : "")} key={i}>
              <div className={"cert-logo" + (c.dark ? " dark" : "")}><img src={A + c.logo} alt={c.alt} /></div>
              <div><h4>{c.title}</h4><span>{c.org}</span><span className="yr">{c.yr}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contato">
        <div className="contact-glow"></div>
        <div className="contact-inner">
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>07 — Contato</span>
          <h2 className="reveal d1" style={{ marginTop: "24px" }}>Vamos<br />trabalhar juntos.</h2>
          <p className="reveal d2">Tem um sistema, automação ou projeto de dados em mente? Me chama — respondo rápido.</p>
          <div className="contact-actions reveal d2">
            <a className="btn btn-primary" href="mailto:yuri.souza@graoinvestimentos.com.br"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>Enviar e-mail</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/yuri-souza-b33013215/" target="_blank" rel="noopener noreferrer"><LinkedInIcon />LinkedIn</a>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-inner">
            <span className="small">© 2026 Yuri Souza · Goiás, Brasil</span>
            <div className="footer-social">
              <a href="https://github.com/YuriiSouza" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/yuri-souza-b33013215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}
