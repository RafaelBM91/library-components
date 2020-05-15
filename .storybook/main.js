const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds/register',
    'storybook-addon-designs/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: true,
        },
        include: [path.resolve(__dirname, '../src')],
        transpileManager: true,
      },
    },
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    return config;
  }
};
