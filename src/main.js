import React, { Component } from 'react';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './state';
import App from './components/App';

const RootedApp = root(App, tree);

render(
  <RootedApp />,
  document.getElementById('root')
);
