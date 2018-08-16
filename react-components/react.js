import ReactDOM from 'react-dom';
import React from 'react';
import { ReactContainer } from './container.js';

const reactNode = document.getElementById('reactNode');
ReactDOM.render(React.createElement(ReactContainer), reactNode);
