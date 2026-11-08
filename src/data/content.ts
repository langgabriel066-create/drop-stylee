export const contact = { phone: '+55 (49) 98877-0740', url: 'https://wa.me/5549988770740?text=' + encodeURIComponent('Olá, MSX CODE! Gostaria de conversar sobre um projeto de site personalizado. Podemos falar sobre as possibilidades?') };
export type Project = { id: string; name: string; category: string; description: string; image: string; year: number | null; url: string | null; demo: boolean };
// Projetos fornecidos pelo usuário. Anos não informados permanecem como null.
export const projects: Project[] = [
  { id: 'essencia', name: 'Essência Country & Casual', category: 'Moda country', description: 'Uma vitrine digital para roupas, acessórios e a identidade country & casual da Essência.', image: '/projects/essencia.jpg', year: null, url: 'https://essencia-country-casual.pleasantbeach.chatgpt.site/', demo: false },
  { id: 'sensacao-acai', name: 'Sensação do Açaí', category: 'Cardápio online', description: 'Cardápio digital para explorar sabores, personalizar combinações e montar pedidos.', image: '/projects/sensacao-acai.png', year: null, url: 'https://sensacao-do-acai-chapeco.pleasantbeach.chatgpt.site/', demo: false },
  { id: 'amc', name: 'AMC Cama, Mesa & Banho', category: 'Casa & decoração', description: 'Vitrine de produtos para cama, mesa e banho, com foco no conforto da casa.', image: '/projects/amc.png', year: null, url: 'https://amc-cama-mesa-banho.pleasantbeach.chatgpt.site/', demo: false },
  { id: 'nova-acai', name: 'NovaAçaí', category: 'Cardápio online', description: 'Uma experiência digital para conhecer o cardápio de açaí e escolher seu próximo pedido.', image: '/projects/nova-acai.jpg', year: null, url: 'https://nova-acai-delivery.lovable.app/', demo: false },
];
export const services = [
  ['Sites institucionais', 'Uma presença digital que traduz a identidade do seu negócio.'],
  ['Landing pages', 'Uma página com mensagem clara e foco na ação que importa.'],
  ['Cardápios digitais', 'Seu cardápio organizado, acessível e fácil de consultar.'],
  ['Sites para delivery', 'Uma experiência direta para apresentar seu menu e receber pedidos.'],
  ['Lojas virtuais', 'Produtos em destaque e uma experiência de compra pensada em cada detalhe.'],
];
