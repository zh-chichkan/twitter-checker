require('./less/index.less');

'use strict';

let a = 10;
console.log(a);

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div className="myDiv">Hello Electron!</div>,
  document.getElementById('content')
);
