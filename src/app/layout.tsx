import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteMotion from '@/components/SiteMotion';

export const metadata: Metadata = {
  metadataBase: new URL('https://joao-vitor-portfolio-red.vercel.app'),
  title: { default: 'João Vitor Araújo | Desenvolvedor Full Stack', template: '%s | João Vitor Araújo' },
  description: 'João Vitor Araújo desenvolve sites, sistemas web e aplicativos. Conheça o MorenaDress, aplicativo Android de gestão de estoque e vendas.',
  applicationName: 'Portfólio João Vitor Araújo',
  keywords: ['João Vitor Araújo', 'Desenvolvedor Full Stack', 'React', 'TypeScript', 'React Native', 'Supabase', 'MorenaDress'],
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'pt_BR', title: 'João Vitor Araújo | Desenvolvedor Full Stack', description: 'Sites, sistemas e aplicativos para desafios reais. Conheça meu trabalho e o projeto MorenaDress.', images: [{url:'/opengraph-image.png',width:1200,height:630,alt:'João Vitor Araújo — Desenvolvedor Full Stack'}] },
  twitter: {card:'summary_large_image', images:['/opengraph-image.png']},
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#080d19' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body><SiteMotion />{children}</body></html>;
}
