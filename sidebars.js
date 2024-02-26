module.exports = {
  mySidebar: [
    "introduction",
    "quick_start",
    "prerequisites",
    {
      type: "category",
      label: "Project Organization",
      collapsed: false,
      items: [
        "project_organization/directory_structure",
        "project_organization/npm_scripts",
        "project_organization/environment_variables",
        "project_organization/ci_cd",
      ],
    },
    {
      type: "category",
      label: "Deployments",
      collapsed: false,
      items: [
        "deployments/local_application",
        "deployments/firebase",
        "deployments/psiturk",
        "deployments/gh_pages",
      ],
      description: "Guides for using a specific deployment",
    },
    {
      type: "category",
      label: "External Tools",
      collapsed: false,
      items: ["event_triggers"],
    },
    {
      type: "category",
      label: "Further Reading",
      items: [
        "further_reading/github_discussions",
        "further_reading/version_control",
        "further_reading/javascript",
      ],
      description: "Guides pointing to additional resources for further learning",
    },
    "troubleshooting",
  ],
};
