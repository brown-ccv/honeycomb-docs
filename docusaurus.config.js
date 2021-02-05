module.exports = {
    title: "HoneyComb",
    tagline:
        "A template for reproducible psychophysiological tasks for clinic, laboratory, and home use",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/hexagon-regular.svg",
    organizationName: "brown-ccv", // Usually your GitHub org/user name.
    projectName: "honeycomb", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "HoneyComb",
            logo: {
                alt: "HoneyComb Logo",
                src: "img/hexagon-regular.svg",
            },
            items: [
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
                        "https://github.com/brown-ccv/honeycomb/edit/documentation/honeycomb/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
