import { LANGUAGES } from '@/locales';

// Esta función se ejecuta en el servidor cada vez que se hace un fetch a /api/projects
export async function GET({ request }) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const lang = params.get('lang') || 'es';
  const page = parseInt(params.get('page') || '1', 10);
  const filter = params.get('filter') || 'all';
  const perPage = 6;

  // Cargamos todos los proyectos del archivo JSON correspondiente
  const allProjects = LANGUAGES[lang].translations.projects_page.projects;

  // Filtramos los proyectos por categoría si es necesario
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.categoryIds.includes(filter));

  // Calculamos la paginación
  const offset = (page - 1) * perPage;
  const pageProjects = filteredProjects.slice(offset, offset + perPage);

  // Devolvemos los proyectos de la página solicitada como JSON
  return new Response(JSON.stringify(pageProjects), {
    headers: { 'Content-Type': 'application/json' },
  });
}