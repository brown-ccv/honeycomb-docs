module.exports = {
  mySidebar: [
    'introduction',
    'project_organization',
    'quick_start',
    {
      type: 'category',
      label: 'How To Guides',
      collapsed: false,
      items: [
        // TODO: These ids have nothing to do with the heading, filename, etc. MAKE THEM MATCH
        'npm_scripts',
        'project_configuration',
        'event_triggers',
        'firebase',
        'deploy_online',
        'ci',
      ],
    },
    {
      type: 'category',
      label: 'Further Reading',
      items: ['further_reading/version_control'], // TODO: Folder structure without effecting slugs
    },
    'prerequisites',
    'troubleshooting',
  ],
};
