module.exports = {
  title: "Honeycomb",
  tagline:
    "A template for reproducible psychophysiological tasks for clinic, laboratory, and home use.",
  url: "https://brown-ccv.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/bee.svg",
  organizationName: "brown-ccv",
  markdown: { mermaid: true },
  themes: ["@docusaurus/theme-mermaid"],
  projectName: "honeycomb-docs",
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: { customCss: require.resolve("./src/css/custom.css") },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          //   TODO: Invalid link? This should just be deleted?
          editUrl: "https://github.com/brown-ccv/honeycomb-docs/edit/main/",
          showLastUpdateTime: true,

          /**
           * Here we give a specific label to the current doc version. Note the old versions:
           *    '3.3.x': { label: "3.3.x", path: "3.3.x" }
           *    '3.2.x': { label: "3.2.x", path: "3.2.x" }
           *    '3.1.x': { label: '3.1.x', path: '3.1.x' },
           *    '3.0.0': { label: '3.0.0', path: '3.0.0' },
           *    '2.x': { label: '2.x', path: '2.x' },
           *    '1.1.0': { label: '1.1.0', path: '1.1.0' },
           */
          lastVersion: "current",
          versions: { current: { label: "3.4.x", path: "" } },
        },
        blog: false, // Disable Docusaurus blog feature
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: "javascript, jspsych",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Honeycomb",
      logo: {
        alt: "Honeycomb Logo",
        src: "img/bee.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/brown-ccv/honeycomb" },
            {
              label: "Discussions Board",
              href: "https://github.com/brown-ccv/honeycomb/discussions",
            },
            { label: "Beehive", href: "https://beehive.ccv.brown.edu/" },
          ],
        },
        {
          title: "Publications",
          items: [
            {
              label:
                // cspell:disable-next-line
                "Provenza, N.R., Gelin, L.F.F., Mahaphanit, W., McGrath, M.C., Dastin-van Rijn, E.M., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K. and Borton, D.A., 2021. Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. Brazilian Journal of Psychiatry, 44, pp.147-155.",
              href: "https://doi.org/10.1590/1516-4446-2020-1675",
            },
          ],
        },
      ],
    },
    prism: {
      additionalLanguages: ["powershell", "firestore-security-rules"],
      magicComments: [
        // Default highlight class
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        // red highlight class
        {
          className: "code-block-delete-line",
          line: "highlight-delete-next-line",
          block: {
            start: "highlight-delete-start",
            end: "highlight-delete-end",
          },
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
};
