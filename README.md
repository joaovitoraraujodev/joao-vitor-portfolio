# João Vitor Araújo — Portfólio

Portfólio pessoal em Next.js, React e TypeScript, com Tailwind CSS e ícones Lucide.

## Como iniciar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Antes de publicar

1. Preencha e-mail, GitHub, LinkedIn e WhatsApp em `src/data/profile.ts`.
2. Substitua o protótipo ilustrativo do MorenaDress por capturas reais autorizadas pela cliente.
3. Revise o texto profissional e as tecnologias que deseja divulgar.
4. Execute `npm run build` e publique na Vercel.

O layout do telefone é **ilustrativo**, não uma captura real do MorenaDress. Nenhuma métrica de impacto foi inventada.

## Informações de contato

Os dados públicos de contato estão centralizados em `src/data/profile.ts`. O WhatsApp e o e-mail estão ativos nos botões da página. Antes de publicar, revise se deseja exibir esses contatos publicamente.


## Estudo de caso MorenaDress

Acesse `/projetos/morenadress` para ver a página dedicada ao aplicativo. O card do projeto na Home agora aponta para essa rota. A ilustração do telefone é conceitual; substitua por capturas reais autorizadas antes de publicar como demonstração visual do produto.


## Galeria MorenaDress

A rota `/projetos/morenadress` inclui oito capturas reais em `public/images/morenadress/`, molduras CSS, galeria responsiva e visualizador ampliado com teclas de seta e Escape. Para trocar uma captura, substitua o JPG correspondente sem modificar a estrutura da página. A galeria usa os arquivos originais enviados, sem alteração de conteúdo.

## Interações e animações

O componente `src/components/SiteMotion.tsx` aplica entrada gradual às seções usando `IntersectionObserver` e rolagem com easing nos links internos da mesma página. A duração é limitada para manter a navegação responsiva. Os botões e cards têm microinterações via CSS, e `prefers-reduced-motion` desativa os movimentos para quem preferir.


## Revisão para lançamento (outubro de 2026)
- Menu de navegação visível e rolável no mobile, inclusive na página MorenaDress.
- Ajustes de espaçamento, quebra de títulos, botões e estados de foco.
- Metadados de SEO, Open Graph, imagem de compartilhamento e favicon próprios.
- Respeito à preferência por movimento reduzido.
- Antes de publicar: executar `npm install`, `npm run build` e testar em dispositivos reais.
- Após escolher domínio, configurar `metadataBase`, URLs canônicas e sitemap com a URL definitiva.
- Não foram inventadas métricas de resultados nem capturas do MorenaDress.
