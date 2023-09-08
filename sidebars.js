module.exports = {
  // TODO: Match sidebar to folder structure? Autogenerate?
  mySidebar: [
    "introduction",
    "quick_start",
    "project_organization",
    {
      type: "category",
      label: "Deployments",
      collapsed: false,
      items: ["deployments", "firebase"],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: ["npm_scripts", "environment_variables", "event_triggers", "ci"],
    },
    {
      type: "category",
      label: "Further Reading",
      items: ["further_reading/version_control", "further_reading/javascript"],
    },
    "prerequisites",
    "troubleshooting",
  ],
};
