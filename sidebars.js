module.exports = {
  // TODO: Match sidebar to folder structure? Autogenerate?
  mySidebar: [
    'introduction',
    'project_organization',
    'quick_start',
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
