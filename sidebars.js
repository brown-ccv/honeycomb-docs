module.exports = {
  // TODO: Match sidebar to folder structure? Autogenerate?
  mySidebar: [
    "introduction",
    "quick_start",
    {
      type: "category",
      label: "Project Organization",
      collapsed: false,
      items: [
        "project_organization/project_organization",
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
      collapsed: true,
      items: ["event_triggers"],
    },
    "prerequisites",
    "troubleshooting",
    {
      type: "category",
      label: "Further Reading",
      items: ["further_reading/version_control", "further_reading/javascript"],
      description: "Guides pointing to additional resources for further learning",
    },
  ],
};
