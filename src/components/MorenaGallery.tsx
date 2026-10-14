'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const shots = [
  { file: 'inicio', label: 'Abertura' },
  { file: 'login', label: 'Acesso' },
  { file: 'painel', label: 'Visão geral' },
  { file: 'produtos', label: 'Produtos' },
  { file: 'categorias', label: 'Categorias' },
  { file: 'entrada-estoque', label: 'Entrada de estoque' },
  { file: 'perfil', label: 'Perfil' },
  { file: 'configuracoes', label: 'Configurações' },
];
const src = (file: string) => `/images/morenadress/${file}.jpg`;
export function PhoneMockup({ file, label, priority = false }: {file:string; label:string; priority?:boolean}) {
  return <div className="md-phone" aria-label={`Captura original do aplicativo: ${label}`}>
    <div className="md-phone-speaker" aria-hidden="true" />
    <div className="md-phone-display"><Image src={src(file)} alt={`Tela ${label} do aplicativo MorenaDress`} fill sizes="(max-width: 640px) 72vw, 240px" priority={priority} /></div>
  </div>;
}
export default function MorenaGallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive(i => i === null ? null : (i + 1) % shots.length);
      if (event.key === 'ArrowLeft') setActive(i => i === null ? null : (i + shots.length - 1) % shots.length);
    };
    window.addEventListener('keydown', key);
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {window.removeEventListener('keydown', key);document.body.style.overflow = old;};
  }, [active]);
  return <>
    <section className="section container md-gallery-section" id="galeria" aria-labelledby="gallery-heading">
      <div className="kicker">05 / TELAS REAIS</div>
      <h2 id="gallery-heading">Conheça o MorenaDress por dentro.</h2>
      <p className="md-gallery-intro">Capturas originais do aplicativo, apresentadas em molduras de smartphone. O estoque aparece vazio porque estava sendo preparado para a entrega à cliente.</p>
      <div className="md-gallery-grid">{shots.map((shot, index) => <button className="md-gallery-item" type="button" key={shot.file} onClick={() => setActive(index)} aria-label={`Ampliar tela: ${shot.label}`}>
        <PhoneMockup file={shot.file} label={shot.label} />
      </button>)}</div>
      <p className="md-gallery-note">As imagens são capturas do aplicativo real; não são dados fictícios nem telas geradas por IA.</p>
    </section>
    {active !== null && <div className="md-lightbox" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setActive(null); }}>
      <div className="md-lightbox-panel" role="dialog" aria-modal="true" aria-label={`Visualização ampliada: ${shots[active].label}`}>
        <button type="button" className="md-lightbox-close" aria-label="Fechar visualização" onClick={() => setActive(null)}><X size={23}/></button>
        <button type="button" className="md-lightbox-prev" aria-label="Tela anterior" onClick={() => setActive(i => i === null ? null : (i + shots.length - 1) % shots.length)}><ChevronLeft size={25}/></button>
        <div className="md-lightbox-phone"><PhoneMockup file={shots[active].file} label={shots[active].label}/><p>{shots[active].label} · {active + 1} de {shots.length}</p></div>
        <button type="button" className="md-lightbox-next" aria-label="Próxima tela" onClick={() => setActive(i => i === null ? null : (i + 1) % shots.length)}><ChevronRight size={25}/></button>
      </div>
    </div>}
  </>;
}
