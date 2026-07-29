// @ts-check
// Documentación Docusaurus: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js — no uses APIs del navegador aquí.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centro de Ayuda FunnelizaLab',
  tagline: 'Encuentra la solución en segundos',
  favicon: 'img/favicon.ico',

  // Future flags para compatibilidad con Docusaurus v4
  future: {
    v4: true,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // URL de producción y baseUrl
  // Para cambiar a dominio propio (ej. ayuda.funnelizalab.com):
  //   1. Cambia `url` a 'https://ayuda.funnelizalab.com'
  //   2. Cambia `baseUrl` a '/'
  //   3. Crea el archivo static/CNAME con el contenido: ayuda.funnelizalab.com
  // ─────────────────────────────────────────────────────────────────────────
  url: 'https://corporacionpingosaki-hub.github.io',
  baseUrl: '/ayuda-funnelizalab/',

  // Configuración para despliegue en GitHub Pages
  organizationName: 'corporacionpingosaki-hub',
  projectName: 'ayuda-funnelizalab',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // ─────────────────────────────────────────────────────────────────────────
  // Internacionalización — sitio en español
  // ─────────────────────────────────────────────────────────────────────────
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Quita `editUrl` si no quieres el botón "Editar esta página"
          // editUrl: 'https://github.com/corporacionpingosaki-hub/ayuda-funnelizalab/tree/main/',
          routeBasePath: 'docs',
        },
        // Blog deshabilitado — Centro de Ayuda solo tiene docs
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // BÚSQUEDA LOCAL (temporal hasta conectar Algolia DocSearch)
  //
  // Para migrar a Algolia DocSearch en la segunda fase:
  //   1. Elimina todo el bloque `@easyops-cn/docusaurus-search-local` de abajo.
  //   2. Añade en `themeConfig` la sección `algolia: { appId, apiKey, indexName }`.
  //   3. Desinstala: npm uninstall @easyops-cn/docusaurus-search-local
  // ─────────────────────────────────────────────────────────────────────────
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['es', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/docs',
        searchBarShortcutHint: true,
        searchResultLimits: 8,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ─── Imagen para Open Graph / social ───────────────────────────────
      // TODO: Reemplaza por la imagen social real de FunnelizaLab cuando esté lista
      image: 'img/social-card.jpg',

      // ─── Modo de color ─────────────────────────────────────────────────
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // ─── Navbar ────────────────────────────────────────────────────────
      navbar: {
        title: 'Centro de Ayuda',
        logo: {
          // TODO: Reemplaza src por el logo real de FunnelizaLab (ej. 'img/logo-funnelizalab.svg')
          alt: 'Logo FunnelizaLab',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/primeros-pasos',
            position: 'left',
            label: 'Ayuda',
          },
          {
            href: 'https://funnelizalab.com',
            label: 'Volver al sitio',
            position: 'right',
          },
        ],
      },

      // ─── Footer minimalista ────────────────────────────────────────────
      footer: {
        style: 'light',
        copyright: `© ${new Date().getFullYear()} FunnelizaLab. Todos los derechos reservados.`,
      },

      // ─── Resaltado de código ───────────────────────────────────────────
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
