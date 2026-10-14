import { PhoneMockup } from '@/components/MorenaGallery';
import { ArrowDownRight, ArrowRight, Code2, Database, ExternalLink, Github, Layers3, Mail, Menu, Smartphone, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { profile, project, skills } from '@/data/profile';

const services = [
  { icon: <Code2 size={23}/>, number: '01', title: 'Sites modernos', text: 'Experiências web responsivas para apresentar sua marca e seus serviços.' },
  { icon: <Database size={23}/>, number: '02', title: 'Sistemas web', text: 'Soluções para organizar informações, automatizar rotinas e apoiar operações.' },
  { icon: <Smartphone size={23}/>, number: '03', title: 'Aplicativos', text: 'Aplicativos mobile projetados para resolver necessidades reais do negócio.' },
];

export default function Home() {
  const contactHref = `mailto:${profile.email}`;
  return <main>
    <header className="site-header"><div className="container header-inner">
      <a href="#inicio" className="brand" aria-label="João Vitor Araújo, início">JV<span>.</span></a>
      <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
      <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="header-cta">Vamos conversar <ArrowUpRightIcon/></a>
    </div></header>
    <section id="inicio" className="hero container">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse"/> DESENVOLVEDOR FULL STACK <span className="eyebrow-line"/></div>
        <h1>Transformando<br/><span>desafios reais</span><br/>em soluções digitais<span className="period">.</span></h1>
        <p>Olá, sou <strong>João Vitor Araújo.</strong> Desenvolvo sites, sistemas e aplicativos que ajudam empresas a modernizar processos e colocar ideias em prática.</p>
        <div className="hero-actions"><a href="#projetos" className="btn btn-primary">Explorar projetos <ArrowRight size={18}/></a><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Entrar em contato <ArrowDownRight size={18}/></a></div>
        <div className="hero-foot"><span>REACT</span><span>TYPESCRIPT</span><span>REACT NATIVE</span><span>SUPABASE</span></div>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="art-glow"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-center"><Layers3 size={72} strokeWidth={1}/></div><div className="art-chip chip-one">&lt;code /&gt;</div><div className="art-chip chip-two">{`{ build: true }`}</div><div className="art-chip chip-three">FULL STACK</div></div>
      <div className="scroll-hint">ROLE PARA EXPLORAR <span>↓</span></div>
    </section>
    <section id="servicos" className="section services-section"><div className="container"><div className="section-heading"><div><div className="kicker">01 / O QUE EU FAÇO</div><h2>Soluções digitais<br/><span>do conceito à entrega.</span></h2></div><p>Do primeiro planejamento à implementação, tecnologia aplicada ao que o seu negócio precisa.</p></div><div className="services-grid">{services.map(service=><article className="service-card" key={service.number}><div className="card-top"><div className="service-icon">{service.icon}</div><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><ArrowDownRight className="card-arrow" size={22}/></article>)}</div></div></section>
    <section id="projetos" className="section projects-section"><div className="container"><div className="section-heading"><div><div className="kicker">02 / TRABALHO EM DESTAQUE</div><h2>Projetos que resolvem<br/><span>problemas reais.</span></h2></div><p>Uma amostra de como transformo necessidades em produtos digitais funcionais.</p></div><article className="project-card"><div className="project-visual project-visual-real"><div className="visual-grid" aria-hidden="true"/><div className="project-phones" aria-label="Capturas reais do aplicativo MorenaDress"><div className="project-phone project-phone-back"><PhoneMockup file="produtos" label="Produtos" /></div><div className="project-phone project-phone-front"><PhoneMockup file="painel" label="Visão geral" priority /></div><div className="project-phone project-phone-side"><PhoneMockup file="categorias" label="Categorias" /></div></div><span className="project-real-label">TELAS REAIS DO APLICATIVO</span></div><div className="project-info"><div className="project-type"><span className="pulse"/> APLICATIVO ANDROID · PROJETO PARA CLIENTE</div><h3>{project.name}<span>.</span></h3><h4>{project.subtitle}</h4><p>{project.description}</p><div className="tech-tags">{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div><div className="project-features"><span>DESTAQUES</span><ul>{project.features.slice(0,3).map(feature=><li key={feature}>{feature}</li>)}</ul></div><Link href="/projetos/morenadress" className="project-link">Ver estudo de caso completo <ArrowRight size={18}/></Link></div></article></div></section>
    <section id="sobre" className="section about-section"><div className="container about-grid"><div><div className="kicker">03 / SOBRE MIM</div><h2>Desenvolvimento com<br/><span>propósito e atenção<br/>aos detalhes.</span></h2></div><div className="about-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="kicker skills-label">TECNOLOGIAS</div><div className="tech-tags">{skills.map(skill=><span key={skill}>{skill}</span>)}</div></div></div></section>
    <section id="contato" className="section contact-section"><div className="container contact-inner"><div className="kicker">04 / VAMOS CONVERSAR</div><h2>Tem uma ideia?<br/><span>Vamos tirar do papel.</span></h2><p>Se você precisa de um site, sistema ou aplicativo, podemos conversar sobre o seu projeto e os próximos passos.</p><div className="contact-actions"><a className="btn btn-primary" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <ArrowRight size={18}/></a><a className="btn btn-outline" href={contactHref}>Enviar um e-mail <Mail size={18}/></a></div><div className="contact-links">{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ExternalLink size={14}/></a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={14}/></a>}{profile.whatsapp && <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ExternalLink size={14}/></a>}</div></div></section>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#inicio">JV<span>.</span></a><span>© {new Date().getFullYear()} João Vitor Araújo. Desenvolvido com React & TypeScript.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </main>;
}
function ArrowUpRightIcon(){return <ArrowDownRight size={16} style={{transform:'rotate(-90deg)'}}/>}
