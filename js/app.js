import React from 'react';
import {render} from 'react-dom';
import Main from "./main-component";

const  appContainer = document.getElementById('app');

const renderApp = () => {
  render(<Main/>, appContainer);
};

renderApp(); 