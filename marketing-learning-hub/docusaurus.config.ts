
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Marketing Learning Paths',
  tagline: 'Learn marketing the modern way—tracks, modules, and quizzes.',
  favicon: 'img/favicon.ico',
  url: 'https://Lavanya-D19.github.io',
  baseUrl: '/marketing-learning-hub/',
  organizationName: 'Lavanya-D19',
  projectName: 'marketing-learning-hub', // CHANGE THIS
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        blog: false,
        pages: true,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Marketing Learning Paths',
      logo: {
        alt: 'Marketing Learning Paths Logo',
        src: '/img/logo.svg',
      },
      items: [
        { to: '/tracks/beginner-week1', label: 'Tracks', position: 'left' },
        { to: '/modules/foundations/intro-to-marketing', label: 'Modules', position: 'left' },
        { to: '/quizzes/quiz-templates', label: 'Quizzes', position: 'left' },
        { to: '/resources/videos', label: 'Resources', position: 'left' },
        { to: '/about', label: 'About', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Tracks', to: '/tracks/beginner-week1' },
            { label: 'Modules', to: '/modules/foundations/intro-to-marketing' },
            { label: 'Quizzes', to: '/quizzes/quiz-templates' },
          ],
        },
        {
          title: 'Build',
          items: [
            { label: 'Resources', to: '/resources/videos' },
            { label: 'Tutorials', to: '/resources/tutorials' },
            { label: 'Templates', to: '/resources/templates' },
          ],
        },
        {
          title: 'Admin',
          items: [
            { label: 'Update Log', to: '/admin/ADMIN_Update_Log' },
            { label: 'Update Process', to: '/admin/Update_Process' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Marketing Learning Paths LMS.`,
    },
    prism: {
  theme: require('prism-react-renderer/themes/github'),
  darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['typescript', 'tsx'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    metadata: [
      { name: 'description', content: 'Learn marketing the mdern way—tracks, modules, and quizzes.' },
      { name: 'keywords', content: 'marketing, learning, tracks, modules, quizzes' },
      { property: 'og:title', content: 'Marketing Learning Paths' },
      { property: 'og:description', content: 'Learn marketing the modern way—tracks, modules, and quizzes.' },
      { property: 'og:image', content: '/img/logo.svg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/img/logo.svg' },
    ],
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
    // announcementBar: {
    //   id: 'welcome',
    //   content: 'Welcome to Marketing Learning Paths!',
    // },
  },
  plugins: [],
  onBrokenLinks: 'throw', // Change to 'warn' if needed
  onBrokenMarkdownLinks: 'warn',
};

module.exports = {
  title: 'Marketing Learning Paths',
  tagline: 'Learn marketing the modern way—tracks, modules, and quizzes.',
  favicon: 'img/favicon.ico',
  url: 'https://Lavanya-D19.github.io',
  baseUrl: '/marketing-learning-hub/',
  organizationName: 'Lavanya-D19',
  projectName: 'marketing-learning-hub',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        blog: false,
        pages: true,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Marketing Learning Paths',
      logo: {
        alt: 'Marketing Learning Paths Logo',
        src: '/img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `© ${new Date().getFullYear()} Marketing Learning Paths LMS.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['typescript', 'tsx'],
    },
  },
  plugins: [],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
};
