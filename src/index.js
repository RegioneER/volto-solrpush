import ToolbarUserMenu from 'volto-solrpush/components/manage/toolbar/ToolbarUserMenu';
import solrImagesMiddleware from 'volto-solrpush/express-middleware/solr-images';

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
