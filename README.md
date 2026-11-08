# MSX CODE

Portfólio editorial em Next.js App Router, React, TypeScript e Tailwind CSS 4, com composição personalizada em CSS. Entrega local; nenhum serviço foi publicado.

## Executar

Requer Node.js 20.9 ou superior e pnpm.

```sh
pnpm install
pnpm dev
```

Abra http://127.0.0.1:3000. Para verificar e gerar a versão estática:

```sh
pnpm typecheck
pnpm build
```

O resultado está em `out/`. Publique o conteúdo dessa pasta em um servidor de arquivos estáticos, com a pasta como raiz. Não abra `out/index.html` por `file://`: os assets usam caminhos a partir da raiz do site. Exportação conforme a [documentação oficial do Next.js](https://nextjs.org/docs/app/guides/static-exports).

## Atualizar conteúdo

- **Projetos e WhatsApp:** `src/data/content.ts`.
- **Textos e seções:** `src/app/page.tsx`.
- **Cores, tipografia e responsividade:** `src/app/globals.css`.
- **Título e descrição para buscas:** `src/app/layout.tsx`.
- **Menu, marca textual e visualização de projetos:** `src/components/interface.tsx`.
- **Imagens:** `public/projects/`.

Cada projeto tem `id`, `name`, `category`, `description`, `image`, `year`, `url` e `demo`. Para publicar um projeto real, substitua os dados e a imagem, defina `demo: false` e forneça a URL HTTPS em `url`. O bloco passará a abrir o site em nova aba. Anos desconhecidos devem continuar como `null`. Os quatro projetos fornecidos já estão cadastrados, com imagens locais e links publicados.

A logo e a referência visual mencionadas no briefing não foram anexadas. A marca está representada provisoriamente em texto no componente `Brand`; substitua-a pelo arquivo original quando disponível, preservando proporções e área de proteção. O favicon também é provisório. A galeria contém Essência Country & Casual, Sensação do Açaí, AMC Cama, Mesa & Banho e NovaAçaí. Os anos não foram informados e foram mantidos como null. As imagens são capturas reais: Essência e NovaAçaí capturadas no navegador; Sensação do Açaí e AMC obtidas das capturas oficiais do Sites. Os SVGs anteriores foram preservados como arquivos, mas não aparecem no portfólio.

Fontes Manrope e Space Grotesk incluídas localmente com as respectivas licenças SIL Open Font License em `public/fonts/`. Não há analytics, cookies de rastreamento, formulário, banco de dados ou dependência de imagens externas.

## Interações e acesso

Menu mobile com estado expandido e fechamento por Escape; projetos de demonstração em `dialog` nativo com fechamento por Escape e retorno de foco; serviços expansíveis com `details`; links de contato no WhatsApp com mensagem profissional preenchida; navegação interna e retorno ao topo; ano atualizado no navegador. O código respeita movimento reduzido, inclui foco visível, link para pular navegação, títulos e landmarks semânticos.

O WhatsApp é aberto somente quando o visitante clica. A integração fornece o link e o texto; nenhuma mensagem é enviada automaticamente.

## Direção visual

Preto `#080808`, branco `#F5F5F3`, carvão `#171717` e cinzas. Space Grotesk para títulos, Manrope para leitura. A abertura usa tipografia como elemento principal; a galeria alterna um projeto amplo e duas composições em alturas diferentes. O mobile reorganiza conteúdo, navegação e proporções, em vez de reduzir toda a composição.

Skills aplicadas: CodeMakers-Design (direção de arte, engenharia, interação e revisão), frontend-design e Sites (fluxo local e critérios para portfólios). Foram consultadas também 21st-ui, shadcn-ui-mcp e computer-use; os conectores de componentes não estão expostos nesta sessão, e a revisão usou o navegador disponível. Skills de documentos, planilhas, apresentações, pets e outras tarefas não se aplicam ao escopo deste site.

## Verificação

Consulte `VERIFICACAO.md` para os checks realmente executados e seus limites. Antes de publicação pública, forneça logo e referência visual; configure domínio e metadados absolutos próprios quando houver uma URL definitiva.

## Hero com Glyph Portal

A hero usa o componente fornecido pelo usuário em `src/components/ui/glyph-portal.tsx`, com o aviso de autoria e licença preservado. `src/components/hero-portal.tsx` adapta a demonstração à MSX CODE; `src/components/hero-portal.css` define a composição visual. A pasta `src/components/ui` corresponde a `@/components/ui`, conforme a organização shadcn declarada em `components.json`. Tailwind e TypeScript já estão instalados; este componente não requer outras dependências nem utilitários shadcn.

A rolagem aproxima a câmera da letra selecionada e revela os projetos. As setas do teclado permitem escolher outra letra. Foram usados textos em português, a fonte Space Grotesk local e a paleta existente; não há busca de fontes ou imagens externas. O carregamento resolve a fonte antes de medir as letras. Sem JavaScript, com preferência por movimento reduzido ou em telas com altura de até 600 px, há uma composição estática com navegação normal. Listeners e observers são removidos na desmontagem; as atualizações de scroll usam requestAnimationFrame, sem renderização de React por frame.

Adaptações ao componente original: rótulos em português, espaços excluídos da seleção de letras e posição da palavra ajustada para telas estreitas. A estrutura e o algoritmo de zoom do código fornecido foram mantidos.

## Fade dos textos principais

O componente src/components/text-reveal.tsx aplica um fade de opacidade de 1.800 ms, uma vez por entrada inicial, nos sete grupos de texto selecionados. A chamada da hero recebe um pequeno intervalo entre título e apoio. A galeria espera a conclusão do portal; títulos de Sobre, Serviços e Contato entram ao aparecer na tela. Não há deslocamento, efeito por letra ou animação nos itens de serviço, projetos e rodapé. Com movimento reduzido, os fades não executam; sem JavaScript, o conteúdo continua visível.



