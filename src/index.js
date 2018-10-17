import React, { createElement } from 'react';
import ReactDOM, { render } from 'react-dom';
import a11y from 'react-a11y';
import { HelloWorld } from './HelloWorld';

const rootNode = document.getElementById('app');

//a11y(React, ReactDOM, {});
render(createElement(HelloWorld), rootNode);
