import React from 'react';
import {render} from 'react-dom';
import Main from "./main-component";

import configureStore from './store';
import initialStore from './store/initial-store';

const  appContainer = document.getElementById('app');
const store = configureStore(initialStore);

const renderApp = () => {
  render(<Main store={store}/>, appContainer);
};

renderApp(); 