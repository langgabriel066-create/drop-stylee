# Verificação — 7 de novembro de 2026

- Compilação de produção Next.js e checagem de TypeScript: concluídas com sucesso.
- Página inicial servida no navegador local, assets presentes e sem erros ou avisos de console durante a revisão.
- Inspeção visual do desktop em 1440 px e mobile em 390 e 320 px; verificação de ausência de transbordamento horizontal também em 768 px.
- Encontrado e corrigido transbordamento do título da galeria e de uma linha de serviço em 320 px. Após a correção, a largura do documento ficou dentro da viewport.
- Menu mobile: abertura e fechamento ao selecionar navegação verificados; atributo `aria-expanded` mudou de `true` para `false`.
- Demonstração de projeto: abertura, nome acessível, fechamento com Escape e retorno de foco ao botão acionador verificados.
- Serviço: expansão e exibição do conteúdo verificadas.
- Navegação entre âncoras e retorno ao topo verificados.
- URL do WhatsApp inspecionada: número e mensagem preenchida correspondem ao briefing. Nenhuma mensagem foi enviada. A abertura no aplicativo WhatsApp de um celular físico não foi testada.
- Fontes locais e ilustrações incluídas. Não houve teste de leitor de tela, iPhone físico, auditoria completa WCAG ou medição de Core Web Vitals.
- Movimento reduzido implementado em CSS; preferência do sistema não foi alterada para testes.

Os exemplos são demonstrações, e a marca textual é provisória porque nenhuma das duas imagens citadas no briefing foi recebida. Nenhum projeto, cliente, resultado ou premiação foi inventado.

## Atualização da hero — Glyph Portal

- Build de produção e TypeScript aprovados após integração do código fornecido.
- Zoom confirmado no navegador: progresso de 0 para aproximadamente 0,40 e, ao continuar a rolagem, 1; galeria com opacidade 1 e estado de entrada concluído.
- Seleção por seta do teclado mudou a letra ativa de M para S.
- Enquadramento inspecionado em 1440 px e mobile em 390 e 320 px, sem transbordamento horizontal.
- Acesso direto aos projetos por Enter e por clique confirmado, com âncora, foco no conteúdo de destino e galeria revelada. Foi corrigido o desaparecimento do CTA durante o enquadramento automático; o botão agora permanece disponível durante o zoom.
- Versão estática em tela de 740 × 480 px confirmada, sem transbordamento.
- A preferência de movimento reduzido está implementada pela mesma alternativa estática; não foi alterada a preferência do sistema para emular essa condição.
- Não houve teste em iPhone físico nem medição de taxa de quadros.


## Fade dos textos principais

- Build de produção e TypeScript aprovados.
- Sete grupos de texto selecionados confirmados no DOM, mantendo títulos semânticos e texto legível no estado final.
- Seção Sobre revisada no navegador; sem transbordamento horizontal nem avisos ou erros de console.
- Animação usa somente opacidade. A versão sem movimento e a sincronização com o portal foram implementadas; não houve emulação da preferência de movimento reduzido.


Ajuste de ritmo: fade ampliado de 680 ms para 1.800 ms, com curva simétrica que evita a aparição rápida no início. Intervalo do apoio da hero ampliado de 120 ms para 260 ms.


## Projetos reais adicionados

Quatro projetos fornecidos pelo usuário: Essência Country & Casual, Sensação do Açaí, AMC Cama, Mesa & Banho e NovaAçaí. URLs preservadas, sem anos inventados. Imagens reais salvas localmente, textos alternativos atualizados e avisos de demonstração removidos. A grade desktop apresenta dois projetos amplos e dois intermediários. A tentativa de revisão final no navegador sofreu timeouts; não confundir as capturas dos sites de origem com revisão visual completa da nova galeria.

