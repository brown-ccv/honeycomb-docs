module.exports = {
  // TODO: Match sidebar to folder structure? Autogenerate?
  mySidebar: [
    'introduction',
    'quick_start',
    'project_organization',
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'npm_scripts',
        'environment_variables',
        'event_triggers',
        'firebase',
        'deploy_online',
        'ci',
      ],
    },
    {
      type: 'category',
      label: 'Further Reading',
      items: ['further_reading/version_control'],
    },
    'prerequisites',
    'troubleshooting',
  ],
};
