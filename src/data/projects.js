// Definimos las categorías con un ID para un filtrado seguro
export const CATEGORIES = {
  'ui-ux': { id: 'ui-ux', name: 'Diseño UI/UX' },
  'frontend': { id: 'frontend', name: 'Desarrollo Frontend' },
  'cms': { id: 'cms', name: 'CMS Headless' },
  'graphics': { id: 'graphics', name: 'Diseño Gráfico' },
};

export const PROJECTS = [
  // Proyectos que aparecerán en la Home (los primeros 6)
  {
    slug: 'yoorco-landing',
    title: 'Landing Page Yoorco',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/assets/projects/yoorco.png',
    categories: [CATEGORIES['ui-ux']]
  },
  {
    slug: 'farmvalley-landing',
    title: 'Landing Page FarmValley',
    imgSrc: '/assets/projects/farmvalley.png',
    categories: [CATEGORIES['ui-ux'], CATEGORIES['frontend']]
  },
  {
    slug: 'kairos-lighting',
    title: 'Landing Page Kairos Lighting',
    imgSrc: '/assets/projects/kairos.png',
    categories: [CATEGORIES['ui-ux'], CATEGORIES['frontend']]
  },
  {
    slug: 'fondo-real-mx',
    title: 'Landing Page Fondo Real MX',
    imgSrc: '/assets/projects/fondo-real.png',
    categories: [CATEGORIES['ui-ux']]
  },
  {
    slug: 'boda-jimena-canek',
    title: 'Invitación Web Boda',
    imgSrc: '/assets/projects/boda.png',
    categories: [CATEGORIES['ui-ux'], CATEGORIES['frontend'], CATEGORIES['cms']]
  },
  {
    slug: 'polea-semarnat',
    title: 'Landing Polea / Semarnat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/assets/projects/polea.png',
    categories: [CATEGORIES['ui-ux'], CATEGORIES['frontend']]
  },
  // Resto de los proyectos (para la página de /proyectos)
  {
    slug: 'ilustraciones-mata-chora-1',
    title: 'Ilustraciones Mata Chora',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['graphics']]
  },
  {
    slug: 'ilustraciones-mata-chora-2',
    title: 'Ilustraciones Mata Chora (Vol. 2)',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['graphics']]
  },
  {
    slug: 'uniformes-alpura',
    title: 'Uniformes Alpura',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['graphics']]
  },
  {
    slug: 'midogu',
    title: 'Midogu',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['ui-ux'], CATEGORIES['frontend']]
  },
  {
    slug: 'cerium',
    title: 'Cerium',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['ui-ux']]
  },
  {
    slug: 'youth-cup',
    title: 'Youth Cup',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['frontend'], CATEGORIES['cms']]
  },
  {
    slug: 'lanresc',
    title: 'Lanresc',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['ui-ux']]
  },
  {
    slug: 'premios-monarca',
    title: 'Invitaciones Premios Monarca (2022-2024)',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['frontend'], CATEGORIES['cms']]
  },
  {
    slug: 'contecon-manzanillo',
    title: 'Contecon Manzanillo',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['frontend'], CATEGORIES['cms']]
  },
  {
    slug: 'bocar',
    title: 'Bocar',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['frontend'], CATEGORIES['cms']]
  },
  {
    slug: 'astom',
    title: 'Astom',
    imgSrc: '/assets/projects/placeholder.png',
    categories: [CATEGORIES['frontend'], CATEGORIES['cms']]
  }
];