// Textos de la interfaz del sitio.
// Aquí se encuentran los textos utilizados en menús, botones,
// buscador, títulos, etiquetas, paginación y otros elementos.

// Mantenemos este identificador interno para no afectar la plantilla.
export const defaultLang = 'zh-hant' as const;

export const ui = {
  'zh-hant': {
    // ── Menú de navegación ──
    'nav.blog': 'Blog',
    'nav.tags': 'Etiquetas',
    'nav.series': 'Series',
    'nav.blogroll': 'Enlaces',
    'nav.about': 'Acerca de',
    'nav.menu': 'Menú',

    // ── Buscador ──
    'search.label': 'Buscar',
    'search.placeholder': 'Buscar artículos…',
    'search.zeroResults': 'No se encontraron resultados',
    'search.manyResults': 'Se encontraron [COUNT] resultados para “[SEARCH_TERM]”',
    'search.oneResult': 'Se encontró [COUNT] resultado para “[SEARCH_TERM]”',
    'search.loadMore': 'Cargar más resultados',
    'search.searching': 'Buscando…',
    'search.devNotice': 'La búsqueda estará disponible después de ejecutar <code>pnpm build</code>',

    // ── Tema ──
    'theme.toggle': 'Cambiar tema',

    // ── Pie de página ──
    'footer.copyright': '© {year} {author}. {license}.',
    'footer.rssLabel': 'Suscribirse por RSS',

    // ── Derechos de autor ──
    'license.fullName': 'Todos los derechos reservados',
    'license.url': '',
    'license.contact': '',

    // ── Paginación ──
    'pagination.nav': 'Paginación de artículos',
    'pagination.prev': 'Página anterior',
    'pagination.next': 'Página siguiente',

    // ── Artículos ──
    'post.toc': 'Contenido',
    'post.openToc': 'Abrir contenido',
    'post.closeToc': 'Cerrar contenido',
    'post.related': 'Artículos relacionados',
    'post.lastUpdated': 'Última actualización',
    'post.readingTime': 'Aproximadamente {n} min de lectura',
    'post.belongsTo': 'Este artículo pertenece a:',
    'post.prev': '← Artículo anterior',
    'post.next': 'Artículo siguiente →',
    'post.copyCode': 'Copiar código',
    'post.imageZoom': 'Ampliar imagen',
    'post.seriesNav': 'Navegación de la serie',
    'breadcrumb.home': 'Inicio',
    'breadcrumb.blog': 'Artículos',

    // ── Comentarios ──
    'comments.title': 'Comentarios',
    'comments.load': 'Cargar comentarios',

    // ── Lista de artículos ──
    'blog.allPosts': 'Todos los artículos',
    'blog.metaDescription': 'Lista de todos los artículos',
    'blog.totalCount': '{n} artículos',
    'blog.pageInfo': '{total} artículos · Página {current} de {last}',
    'blog.pageTitle': 'Todos los artículos - Página {n}',

    // ── Etiquetas ──
    'tags.title': 'Etiquetas',
    'tags.metaDescription': 'Todas las etiquetas de los artículos',
    'tags.viewAll': 'Ver todo',
    'tags.sectionCount': '{n} artículos',
    'tags.postCount': '{n} artículos',
    'tags.leafDescription': 'Artículos etiquetados como “{name}”',
    'tags.groupDescription': 'Artículos de la categoría “{name}”',
    'tags.empty': 'Actualmente no hay artículos con esta etiqueta.',
    'tags.orphanTitle': 'Sin categoría',
    'tags.orphanHint': 'Etiquetas que aún no han sido clasificadas',
    'tags.planned': 'Próximamente',

    // ── Enlaces / Blogroll ──
    'blogroll.title': 'Enlaces de interés',
    'blogroll.metaDescription': 'Sitios web y enlaces recomendados',
    'blogroll.intro': 'Algunos sitios y recursos interesantes en Internet.',
    'blogroll.empty': 'Todavía no hay enlaces disponibles. ✨',

    // ── Series ──
    'series.title': 'Series',
    'series.metaDescription': 'Artículos organizados por temas',
    'series.empty': 'Próximamente habrá nuevas series de artículos.',
    'series.domainMetaDescription': 'Artículos de la serie {title}',
    'series.detailMetaDescription': 'Contenido de la serie {title}',
    'series.seriesCount': '{n} series',
    'series.chapterCount': '{n} artículos',
    'series.partCount': '{n} partes',
    'series.partAndChapters': '{parts} partes · {chapters} artículos',

    // ── Página principal ──
    'home.pinned': 'Artículos destacados',
    'home.pinnedBadge': 'Destacado',
    'home.featuredSeries': 'Series destacadas',
    'home.seeAllSeries': 'Ver todas las series →',
    'home.latestPosts': 'Últimos artículos',

    // ── Acerca de ──
    'about.title': 'Acerca de mí',
    'about.metaDescription': 'Información sobre este sitio y su autor',

    // ── Página 404 ──
    'notFound.metaTitle': '404 — Página no encontrada',
    'notFound.metaDescription': 'Esta página no existe o ha sido movida.',
    'notFound.heading': 'Página no encontrada',
    'notFound.message':
      'La página que buscas pudo haber sido movida, renombrada o quizá nunca existió. Revisa la dirección o utiliza alguno de los enlaces disponibles.',
    'notFound.home': '← Volver al inicio',
    'notFound.linksLabel': 'También puedes visitar',

    // ── RSS ──
    'rss.badge': 'RSS',
    'rss.subscribeHint':
      'Este es un canal RSS. Puedes copiar la dirección de esta página en tu lector RSS para recibir automáticamente las nuevas publicaciones.',
    'rss.visitSite': 'Visitar sitio →',
    'rss.latestPosts': 'Últimos artículos',
    'rss.readMore': 'Leer artículo completo →',

    // ── llms.txt ──
    'llms.operatedBy': 'Este sitio es administrado por {author}.',
    'llms.postsHeading': 'Artículos',
    'llms.seriesHeading': 'Series',
  },
} as const;

export type Lang = keyof typeof ui;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

// Configuración regional.
// Aunque internamente mantenemos la clave "zh-hant",
// el sitio se mostrará y formateará en español de Colombia.
export const localeTags = {
  'zh-hant': {
    html: 'es',
    og: 'es_CO',
    intl: 'es-CO',
    giscus: 'es',
  },
} as const satisfies Record<
  Lang,
  {
    html: string;
    og: string;
    intl: string;
    giscus: string;
  }
>;

// Configuración regional utilizada por todo el sitio.
export const siteLocale = localeTags[defaultLang];