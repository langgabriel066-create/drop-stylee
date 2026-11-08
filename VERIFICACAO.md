# Verificação da nova Hero Prisma — 8 de novembro de 2026

- Substituição integral do Glyph Portal e do cabeçalho anterior; as outras seções foram preservadas.
- Estrutura TypeScript, Tailwind 4 e alias shadcn `@/components/ui` existentes e mantidos.
- Dependências Framer Motion e Lucide React instaladas com lockfile.
- `pnpm typecheck` e `pnpm build`: aprovados.
- `pnpm audit --prod`: nenhuma vulnerabilidade conhecida encontrada.
- Revisão da hero no navegador em 1440, 768, 390, 375 e 320 px: sem transbordamento horizontal; navegação com cinco destinos existentes; alvos mobile de 44 px.
- Vídeo reproduzido no navegador e botão de pausa verificado, incluindo mudança do nome acessível para reproduzir.
- Âncora Serviços acionada; URL do WhatsApp revisada, sem envio de mensagem.
- Vídeo original de 16.092.112 bytes otimizado para 870.516 bytes; poster local de 96.931 bytes. Mesmo conteúdo visual fornecido no briefing.
- Texto sem estado inicial oculto no HTML do servidor. Preferência de movimento reduzido e economia de dados desativam autoplay; listeners removidos na desmontagem.
- Preferência do sistema revisada no código, sem emulação no navegador. Não houve teste em dispositivo físico, leitor de tela ou medição de Core Web Vitals.
- Esta entrega altera os arquivos locais; publicação não executada nesta etapa.

## Barra fixa e painel Explorar

- TypeScript e build de produção: aprovados após integração.
- Inspeção em 320, 375, 768, 1024 e 1440 px: sem overflow horizontal.
- Estado expanded, abertura do painel, fechamento por Escape e retorno do foco confirmados.
- Fechamento por clique fora e por seleção de link confirmados.
- Navegação até Projetos confirmada; cabeçalho mantém position fixed durante rolagem.
- Links no painel em 320 px com altura de 44 px. Painel com overflow auto e altura limitada.
- Console da aba revisada sem erros ou avisos capturados.
- Movimento reduzido implementado e revisado no código; preferência do sistema não emulada.
- Publicação externa não executada.

## Correção de fade-in — 8 de novembro de 2026

- TypeScript e build de produção aprovados.
- Título de contato fora da viewport: opacity 0, deslocamento de 20 px e estado ainda não revelado.
- Após entrar: estado visible e opacity 1. Após sair e voltar: estado visible e opacity 1 preservados.
- Colunas do menu mantêm o estado visible ao fechar e reabrir.
- Hero com quatro elementos revelados e transition-duration de 0.7s.
- Console sem erros ou avisos capturados na aba revisada.
- CSS reduced-motion e fallback noscript revisados no código. Preferência do sistema e JavaScript desativado não foram emulados no navegador.
- Não houve medição de FPS ou Core Web Vitals. Sem publicação externa nesta etapa.

## Carrossel de projetos — 8 de novembro de 2026

- TypeScript e build de produção aprovados.
- Comparação automática das expressões className com o arquivo recebido: todas preservadas.
- Projeto anterior, próximo, indicador 3, Home, End e retorno circular 4 → 1 e 1 → 4 verificados no navegador.
- Imagens e links dos slides Sensação do Açaí e NovaAçaí inspecionados; primeiro slide Essência revisado visualmente.
- Imagem com altura computada 384 px, object-fit cover e filtro grayscale(1); título com 24 px, sem herdar o tamanho do título da seção.
- Sem overflow horizontal em 320, 390, 768 e 1440 px.
- Console sem erros ou avisos capturados.
- Classes, estrutura de controles e lógica originais preservadas; não houve auditoria completa dos papéis ARIA do componente fornecido. Preferência de movimento reduzido não emulada.
- Publicação externa não executada nesta etapa.
