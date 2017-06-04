import React from 'react';
import ReactDom from 'react-dom';
import App from './views/App';
import {injectGlobal} from 'styled-components';
import './reset';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font: 14px Helvetica, arial;
    color: #444;
    line-height: 1.42;
    background: #f1f1f1;
  }
`

ReactDom.render( <App/>, document.getElementById('container'));
