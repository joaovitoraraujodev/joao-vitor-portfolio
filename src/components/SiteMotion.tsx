'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = document.querySelectorAll<HTMLElement>(
      '.section-heading, .service-card, .project-card, .about-grid > *, .contact-inner > *, .case-hero > *, .case-showcase, .case-story > *, .case-feature, .case-step, .case-tech-section .case-story > *, .md-gallery-section > .kicker, .md-gallery-section > h2, .md-gallery-item, .case-next > *'
    );
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    targets.forEach((el, index) => {
      el.classList.add('motion-reveal');
      el.style.setProperty('--motion-delay', `${Math.min(index % 3, 2) * 85}ms`);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    targets.forEach(el => observer.observe(el));
    return () => {
      observer.disconnect();
      targets.forEach(el => { el.classList.remove('motion-reveal', 'motion-visible'); el.style.removeProperty('--motion-delay'); });
    };
  }, [pathname]);

  useEffect(() => {
    let animation = 0;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      let id: string;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      cancelAnimationFrame(animation);
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
      const start = window.scrollY;
      const end = Math.max(0, target.getBoundingClientRect().top + start - headerHeight - 18);
      const distance = end - start;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || Math.abs(distance) < 3) {
        window.scrollTo({ top: end, behavior: 'instant' });
      } else {
        const duration = Math.min(1150, Math.max(550, Math.abs(distance) * 0.45));
        const startTime = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1);
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          window.scrollTo(0, start + distance * ease);
          if (t < 1) animation = requestAnimationFrame(tick);
        };
        animation = requestAnimationFrame(tick);
      }
      history.pushState(null, '', url.hash);
    };
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('click', onClick); cancelAnimationFrame(animation); };
  }, [pathname]);
  return null;
}
