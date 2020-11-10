module.exports = {
  title: 'Civilization VI Modding Wiki',
  tagline: 'A Collection of ramblings about modding Civilization VI',
  url: 'https://jonathanturnock.github.io/',
  baseUrl: '/civ-vi-modding/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'JonathanTurnock', // Usually your GitHub org/user name.
  projectName: 'civ-vi-modding', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CIV VI Modding Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/JonathanTurnock/civ-vi-modding/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Civ Fanatics',
          items: [
            {
              label: 'Civ Fanatics',
              href: 'https://www.civfanatics.com/civ6/',
            },
            {
              label: 'Creation & Customization Forum',
              href: 'https://forums.civfanatics.com/forums/civ6-creation-customization.541/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/JonathanTurnock/civ-vi-modding/',
            },
            // {
            //   label: 'Gift Gold',
            //   href: 'https://www.buymeacoffee.com/Yvd79ZDm6',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jonathan Turnock. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/JonathanTurnock/civ-vi-modding/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JonathanTurnock/civ-vi-modding/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom'
  ],
};
