import { configure, addParameters } from '@storybook/react';
import './styles.css';

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    hierarchySeparator: /\//,
    panelPosition: 'bottom',
    sidebarAnimations: false,
    sortStoriesByKind: false
  }
});

const req = require.context(
  '../stories/',
  true,
  /.*\.(stories|story)\.(js|jsx|ts|tsx)?$/
);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
