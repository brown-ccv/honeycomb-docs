module.exports = {
  title: 'Honeycomb',
  tagline:
    'A template for reproducible psychophysiological tasks for clinic, laboratory, and home use.',
  url: 'https://brown-ccv.github.io',
  baseUrl: '/honeycomb-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hexagon-regular.svg',
  organizationName: 'brown-ccv',
  projectName: 'honeycomb-docs',
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'javascript, jspsych',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Honeycomb',
      logo: {
        alt: 'Honeycomb Logo',
        src: 'img/hexagon-regular.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/brown-ccv/honeycomb',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Introduction', to: 'docs/' }],
        },
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/brown-ccv/honeycomb' }],
        },
        {
          title: 'Related Publications',
          items: [
            {
              label:
                'Provenza, N.R., Gelin, L.F.F., Mahaphanit, W., McGrath, M.C., Dastin-van Rijn, E.M., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K. and Borton, D.A., 2021. Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. Brazilian Journal of Psychiatry, 44, pp.147-155.',
              href: 'https://doi.org/10.1590/1516-4446-2020-1675',
            },
          ],
        },
      ],
    },
    prism: {
      additionalLanguages: ['powershell'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: { customCss: require.resolve('./src/css/custom.css') },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //   TODO: Invalid link? This should just be deleted?
          editUrl: 'https://github.com/brown-ccv/honeycomb-docs/edit/main/',
          showLastUpdateTime: true,

          /**
           * Here we give a specific label to the current doc version. Note the old versions:
           *    '3.0.0': { label: '3.0.0', path: '3.0.0' },
           *    '2.x': { label: '2.x', path: '2.x' },
           *    '1.1.0': { label: '1.1.0', path: '1.1.0' },
           */
          lastVersion: 'current',
          versions: { current: { label: '3.1.x', path: '' } },
        },
        blog: false, // Disable Docusaurus blog feature
      },
    ],
  ],
};
