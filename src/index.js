import ToolbarUserMenu from 'volto-solrpush/components/manage/toolbar/ToolbarUserMenu';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    appExtras: [
      ...config.settings.appExtras,
      {
        match: '',
        component: ToolbarUserMenu,
      },
    ],
  };
  return config;
};

export default applyConfig;
