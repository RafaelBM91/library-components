import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { setConsoleOptions } from '@storybook/addon-console';
import { setOptions } from '@storybook/addon-options';

setConsoleOptions({
  panelExclude: []
});

addParameters({
  name: 'README addon',
  options: {
    addonPanelInRight: true,
  }
});

setOptions({
  name: 'RAFAELBM91',
  showAddonPanel: true,
  goFullScreen: false,
  showLeftPanel: false,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

addDecorator(addReadme);

const req = require.context('../src/stories/', true, /storie/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
