module.exports = {
    title: "Honeycomb",
    tagline:
        "A template for reproducible psychophysiological tasks for clinic, laboratory, and home use",
    url: "https://brown-ccv.github.io",
    baseUrl: "/honeycomb-docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/hexagon-regular.svg",
    organizationName: "brown-ccv", // Usually your GitHub org/user name.
    projectName: "honeycomb-docs", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Honeycomb",
            logo: {
                alt: "Honeycomb Logo",
                src: "img/hexagon-regular.svg",
            },
            items: [
                {
                    type: "docsVersionDropdown",
                    position: "left",
                    dropdownActiveClassDisabled: true,
                },
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                {
                    href: "https://github.com/brown-ccv/honeycomb",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Getting Started",
                            to: "docs/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/brown-ccv/honeycomb",
                        },
                    ],
                },
            ],
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/brown-ccv/honeycomb-docs/edit/main/",

                    showLastUpdateTime: true,

                    /**
                     * The last version is the one we navigate to in priority on versioned sites
                     * It is the one displayed by default in docs navbar items
                     * By default, the last version is the first one to appear in versions.json
                     * By default, the last version is at the "root" (docs have path=/docs/myDoc)
                     * Note: it is possible to configure the path and label of the last version
                     * Tip: using lastVersion: 'current' make sense in many cases
                     */
                    lastVersion: "current",
                    /**
                     * The docusaurus versioning defaults don't make sense for all projects
                     * This gives the ability customize the label and path of each version
                     * You may not like that default version
                     */
                    versions: {
                        current: {
                            label: "2.1.0",
                            path: "",
                        },
                        "1.1.0": {
                            label: "1.1.0",
                            path: "1.1.0",
                        },
                    },
                    /**
                     * Sometimes you only want to include a subset of all available versions.
                     * Tip: limit to 2 or 3 versions to improve startup and build time in dev and deploy previews
                     */
                    // onlyIncludeVersions: undefined, // ex: ["current", "1.0.0", "2.0.0"]
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
