import MorenaGallery, { PhoneMockup } from '@/components/MorenaGallery';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Layers3, LockKeyhole, Package, ShoppingBag, Smartphone, Cloud, Github, Mail } from 'lucide-react';
import { profile, project } from '@/data/profile';

export const metadata: Metadata = {
  title: 'MorenaDress | Estudo de caso — João Vitor Araújo',
  description: 'Conheça o desenvolvimento do MorenaDress: aplicativo Android de gestão de estoque e vendas, construído com React Native, Expo, TypeScript e Supabase.',
};

const capabilities = [
  { icon: Package, title: 'Catálogo de produtos', text: 'Cadastro e edição de produtos, com organização por categorias.' },
  { icon: Layers3, title: 'Variações de produtos', text: 'Gerenciamento de opções por cor e tamanho e suas quantidades.' },
  { icon: Database, title: 'Movimentação de estoque', text: 'Registro de entradas e saídas para acompanhar o estoque disponível.' },
  { icon: ShoppingBag, title: 'Controle de vendas', text: 'Registro de vendas integrado às informações de produtos e estoque.' },
  { icon: LockKeyhole, title: 'Acesso protegido', text: 'Autenticação e políticas de acesso aos dados com Row Level Security.' },
  { icon: Cloud, title: 'Dados na nuvem', text: 'Persistência centralizada no PostgreSQL via Supabase.' },
];
const stages = [
  ['01', 'Desafio', 'Substituir controles manuais de produtos, estoque e vendas em uma loja de moda feminina por um fluxo digital organizado.'],
  ['02', 'Solução', 'Criar um aplicativo Android com cadastro de produtos, categorias, variações, movimentações de estoque e registro de vendas.'],
  ['03', 'Implementação', 'Desenvolver a interface em React Native com Expo e TypeScript, utilizando Supabase para autenticação, armazenamento e banco PostgreSQL.'],
  ['04', 'Entrega', 'Gerar um APK Android personalizado com EAS Build, preparado para utilização pela cliente.'],
];
export default function MorenaDressPage() {
  return <main className="case-page">
    <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Voltar ao início">JV<span>.</span></Link><nav aria-label="Navegação"><Link href="/#projetos">Projetos</Link><Link href="/#sobre">Sobre</Link><Link href="/#contato">Contato</Link></nav><a className="header-cta" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowRight size={16}/></a></div></header>
    <section className="container case-hero"><Link href="/#projetos" className="case-back"><ArrowLeft size={16}/> Voltar aos projetos</Link><div className="kicker">ESTUDO DE CASO / APLICATIVO ANDROID</div><h1>Morena<span>Dress.</span></h1><p className="case-lead">Um aplicativo para organizar o estoque e as vendas de uma loja de moda feminina.</p><div className="case-tags">{project.technologies.map(t=><span key={t}>{t}</span>)}</div></section>
    <section className="container"><div className="case-showcase"><div className="case-showcase-copy"><span className="kicker">SOLUÇÃO PARA CLIENTE</span><h2>Da gestão manual a uma rotina mais organizada.</h2><p>O MorenaDress reúne produtos, variações, estoque e vendas em uma solução mobile com dados centralizados na nuvem.</p><a href="#galeria" className="btn btn-primary md-gallery-cta">Ver galeria de telas <ArrowRight size={17}/></a><span className="case-caption">Telas reais do aplicativo, sem alterações no conteúdo.</span></div><div className="md-hero-phones"><div className="md-hero-phone md-hero-phone-left"><PhoneMockup file="produtos" label="Produtos" /></div><div className="md-hero-phone md-hero-phone-main"><PhoneMockup file="painel" label="Visão geral" priority /></div><div className="md-hero-phone md-hero-phone-right"><PhoneMockup file="categorias" label="Categorias" /></div></div></div></section>
    <section className="section container case-story"><div><div className="kicker">01 / CONTEXTO</div><h2>O problema por trás do projeto.</h2></div><div><p>A loja precisava de uma alternativa digital para acompanhar seus produtos e operações de estoque e vendas, reduzindo a dependência de controles manuais.</p><p>O objetivo do aplicativo foi facilitar a organização do catálogo, diminuir a possibilidade de inconsistências e tornar a rotina de consulta e atualização mais prática.</p><p className="case-caveat">Esses são objetivos do projeto, não métricas de resultados comprovados.</p></div></section>
    <section className="section case-capabilities"><div className="container"><div className="kicker">02 / FUNCIONALIDADES</div><h2>O que o aplicativo permite fazer.</h2><div className="case-feature-grid">{capabilities.map(({icon:Icon,title,text})=><article className="case-feature" key={title}><div className="case-feature-icon"><Icon size={23}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section container"><div className="kicker">03 / DESENVOLVIMENTO</div><h2>Do desafio à entrega.</h2><div className="case-timeline">{stages.map(([n,title,text])=><div className="case-step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="section case-tech-section"><div className="container case-story"><div><div className="kicker">04 / ARQUITETURA</div><h2>Tecnologias e decisões técnicas.</h2></div><div><p><strong>React Native + Expo + TypeScript</strong> na interface Android; <strong>Expo Router</strong> na navegação; <strong>Context API</strong> para o estado de autenticação.</p><p><strong>Supabase</strong> integra autenticação, banco <strong>PostgreSQL</strong> e armazenamento de informações na nuvem. As políticas de <strong>Row Level Security (RLS)</strong> ajudam a restringir o acesso aos dados.</p><p>O aplicativo foi compilado por meio do <strong>EAS Build</strong>, com geração de APK Android personalizado.</p></div></div></section>
    <MorenaGallery />
    <section className="section container case-next"><div className="kicker">05 / PRÓXIMO PROJETO</div><h2>Precisa de uma solução parecida?</h2><p>Podemos conversar sobre as necessidades do seu negócio e avaliar a melhor forma de desenvolver sua solução digital.</p><div className="contact-actions"><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conversar no WhatsApp <ArrowRight size={17}/></a><a href={`mailto:${profile.email}`} className="btn btn-outline">Enviar e-mail <Mail size={17}/></a></div><Link className="case-back case-bottom-link" href="/"><ArrowLeft size={16}/> Voltar ao portfólio</Link></section>
    <footer className="footer"><div className="container footer-inner"><Link className="brand" href="/">JV<span>.</span></Link><span>© {new Date().getFullYear()} João Vitor Araújo.</span><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> GitHub</a></div></footer>
  </main>;
}
