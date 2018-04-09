import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

let style = {
    color: 'red',
    fontSize: '30px'
}
let jsx = <div style={style}>jsx.....</div>;


let jsx2 = <div className="jsx" >jsx2......</div>;

ReactDOM.render(
    jsx2, 
    document.getElementById("app")
);