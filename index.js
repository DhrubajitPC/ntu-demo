import ReactDOM from 'react-dom';
import React from 'react';
import { ReactContainer } from './react-components/container.js';
import './vue-components/container';

const reactNode = document.getElementById('reactNode');
// console.log(window.node, document.getElementsByClassName('container'));
ReactDOM.render(React.createElement(ReactContainer), reactNode);
