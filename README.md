# MSX CODE

Portfólio editorial em Next.js App Router, React, TypeScript e Tailwind CSS 4, com composição personalizada em CSS. Configurado para publicação na Vercel com o adaptador nativo do Next.js.

## Executar

Requer Node.js 20.9 ou superior e pnpm.

```sh
pnpm install
pnpm dev
```

Abra http://127.0.0.1:3000. Para verificar e gerar a versão de produção:

```sh
pnpm typecheck
pnpm build
```

O resultado está em `.next/`. Execute `pnpm start` para testar a versão de produção. Na Vercel, importe este repositório com Root Directory `./`; o arquivo `vercel.json` fixa o framework `nextjs`, o comando `pnpm run build` e a saída `.next`. A exportação `output: export` foi removida para usar o adaptador nativo da plataforma. Veja a [documentação oficial de deploy do Next.js](https://nextjs.org/docs/app/getting-started/deploying).

## Atualizar conteúdo

- **Projetos e WhatsApp:** `src/data/content.ts`.
- **Textos e seções:** `src/app/page.tsx`.
- **Cores, tipografia e responsividade:** `src/app/globals.css`.
- **Título e descrição para buscas:** `src/app/layout.tsx`.
- **Marca textual e visualização de projetos:** `src/components/interface.tsx`.
- **Imagens:** `public/projects/`.

Cada projeto tem `id`, `name`, `category`, `description`, `image`, `year`, `url` e `demo`. Para publicar um projeto real, substitua os dados e a imagem, defina `demo: false` e forneça a URL HTTPS em `url`. O título do slide abre o site em nova aba. Anos desconhecidos devem continuar como `null`. Os quatro projetos fornecidos já estão cadastrados, com imagens locais e links publicados.

A logo e a referência visual mencionadas no briefing não foram anexadas. A marca está representada provisoriamente em texto no componente `Brand`; substitua-a pelo arquivo original quando disponível, preservando proporções e área de proteção. O favicon também é provisório. A galeria contém Essência Country & Casual, Sensação do Açaí, AMC Cama, Mesa & Banho e NovaAçaí. Os anos não foram informados e foram mantidos como null. As imagens são capturas reais: Essência e NovaAçaí capturadas no navegador; Sensação do Açaí e AMC obtidas das capturas oficiais do Sites. Os SVGs anteriores foram preservados como arquivos, mas não aparecem no portfólio.

Fontes Manrope e Space Grotesk incluídas localmente com as respectivas licenças SIL Open Font License em `public/fonts/`. Não há analytics, cookies de rastreamento, formulário, banco de dados ou dependência de imagens externas.

## Interações e acesso

Barra fixa com atalhos no desktop e painel Explorar com alvos de toque de 44 px; serviços expansíveis com `details`; links de contato no WhatsApp com mensagem profissional preenchida; navegação interna e retorno ao topo; ano atualizado no navegador. O código respeita movimento reduzido, inclui foco visível, link para pular navegação, títulos e landmarks semânticos.

O WhatsApp é aberto somente quando o visitante clica. A integração fornece o link e o texto; nenhuma mensagem é enviada automaticamente.

## Direção visual

Preto `#080808`, branco `#F5F5F3`, carvão `#171717` e cinzas. Space Grotesk para títulos, Manrope para leitura. A abertura usa tipografia como elemento principal; a galeria alterna um projeto amplo e duas composições em alturas diferentes. O mobile reorganiza conteúdo, navegação e proporções, em vez de reduzir toda a composição.

Skills aplicadas: CodeMakers-Design (direção de arte, engenharia, interação e revisão), frontend-design e Sites (fluxo local e critérios para portfólios). Foram consultadas também 21st-ui, shadcn-ui-mcp e computer-use; os conectores de componentes não estão expostos nesta sessão, e a revisão usou o navegador disponível. Skills de documentos, planilhas, apresentações, pets e outras tarefas não se aplicam ao escopo deste site.

## Verificação

Consulte `VERIFICACAO.md` para os checks realmente executados e seus limites. Antes de publicação pública, forneça logo e referência visual; configure domínio e metadados absolutos próprios quando houver uma URL definitiva.

## Hero Prisma

A abertura foi substituída integralmente pelo componente de referência fornecido pelo usuário. `src/components/ui/prisma-hero.tsx` contém a hero, os helpers `WordsPullUp` e `WordsPullUpMultiStyle`, os links reais e o controle do vídeo; `src/components/ui/prisma-hero.css` contém a composição responsiva. A pasta `src/components/ui` corresponde ao alias `@/components/ui` no `components.json`. TypeScript, Tailwind e a estrutura shadcn já estavam configurados. Foram instalados `framer-motion` e `lucide-react`; não são necessários providers adicionais.

O vídeo fornecido foi otimizado em `public/hero-background.mp4`, preservando seu conteúdo; `public/hero-poster.jpg` é um frame local para carregamento, falha de mídia e movimento reduzido. A origem é o link CloudFront enviado no briefing. O vídeo não possui som. O visitante pode pausar ou reproduzir, e não há reprodução automática quando `prefers-reduced-motion` ou economia de dados estão ativos. Sem JavaScript, o texto e a imagem permanecem visíveis. As entradas usam a implementação compartilhada descrita abaixo, com 700 ms de duração.

A marca e o texto foram adaptados à MSX CODE. As seções abaixo da abertura foram preservadas. O portal, seu componente, seus estilos e o cabeçalho anterior foram removidos. Nenhuma imagem de banco foi necessária, pois o briefing já fornece o vídeo.

## Navegação fixa — referência Footer Section

`src/components/ui/footer-section.tsx` exporta `FixedSiteNavigation`. Foi adaptada a estrutura em colunas do rodapé enviado para um cabeçalho semântico fixo com disclosure não modal. Os estilos estão em `src/components/ui/footer-section.css`. O componente é montado antes do `main` em `src/app/page.tsx`; a navegação anterior da hero foi removida para evitar duplicação.

A barra tem z-index 50; o link para pular conteúdo tem z-index 100. Há espaço reservado no início da página e scroll-padding para as âncoras. O painel possui altura máxima e rolagem própria em telas baixas. Escape devolve foco ao botão; clique fora, saída do foco e seleção de link fecham o painel. O estado é local, com aria-expanded e aria-controls; nenhum provider é necessário.

Skills aplicadas: CodeMakers-Design para identidade e estrutura, animation-motion para entradas com transform/opacity, responsive-mobile para os layouts e critérios de acessibilidade para foco e teclado. Foram reutilizados framer-motion e lucide-react já instalados, sem adicionar o pacote motion com a mesma finalidade. A pasta src/components/ui já é o caminho shadcn do projeto. Textos, links e marca foram adaptados ao conteúdo real; não foram incluídos perfis sociais ou páginas inexistentes.

## Correção do fade-in — entrada única

`src/components/text-reveal.tsx` centraliza o comportamento de hero, textos de seção e colunas do menu. O CSS em `src/components/text-reveal.css` é carregado no layout raiz e define opacity: 0 e translateY(20px) antes da hidratação. Na primeira interseção, o observer define data-reveal-state="visible" e se desconecta. O estado visível permanece no elemento e em uma ref; não há reset na saída da viewport ou na atualização do estado do vídeo.

A transição usa apenas opacity e transform, dura 700 ms e usa cubic-bezier(.22,1,.36,1). Os atrasos são limitados a 300 ms. Não há listener de scroll nem camadas permanentes com will-change. As colunas do menu permanecem montadas enquanto o painel está fechado, evitando repetição na reabertura.

Movimento reduzido desativa a transição e mantém o conteúdo visível; mudança da preferência também encerra a espera por entrada. Foco do teclado revela imediatamente o elemento. O layout inclui fallback noscript para acesso ao conteúdo sem JavaScript; sem suporte a IntersectionObserver, o componente mostra o texto imediatamente. Nenhuma dependência adicional foi instalada.

Uso: <TextReveal as="h2" delay={80}>Título da seção</TextReveal>. Os atrasos são em milissegundos.

## Substituição dos cards — ImageSliderCard

O arquivo enviado `image-slider-card.tsx` foi integrado em `src/components/ui/image-slider-card.tsx`. A seção Projetos em `src/app/page.tsx` agora renderiza um único carrossel com os quatro projetos reais. O componente ProjectItem, seu diálogo e os estilos anteriores foram removidos de `interface.tsx` e `globals.css`.

Todas as expressões className do componente fornecido foram preservadas, incluindo escala de cinza, altura h-96, largura max-w-3xl, bordas, setas e indicadores. Paginação circular, estados, variantes, AnimatePresence e atalhos de teclado mantêm a lógica original. As adaptações são os dados de projects, URL no título e rótulos em português. Não foram incluídas imagens externas.

Os tokens semânticos card, background, foreground, border, muted, muted-foreground, primary e ring foram mapeados para a paleta existente no @theme inline do Tailwind 4. Os resets de imagens e margens de títulos passaram à camada base para não sobrescrever utilities do arquivo fornecido. O título principal da seção usa seletor específico para não alterar o h2 do slide. O wrapper project-slider apenas centraliza o componente e define o espaçamento externo.

Framer Motion e Lucide React já estavam instalados: nenhuma dependência nova ou alteração de lockfile. O diff em ../image-slider-card.diff destaca adaptações ao arquivo original.

## Cores das capas

Após a integração do componente original, o filtro grayscale foi removido por solicitação do usuário. Todas as capas usam saturate(1.15) e contrast(1.04), mantendo as cores originais com um realce moderado. As imagens não foram reexportadas; dimensões, carrossel e navegação permanecem iguais.
