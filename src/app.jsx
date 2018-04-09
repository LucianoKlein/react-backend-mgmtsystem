import React from 'react';
import ReactDOM from 'react-dom';


let style = {
    color: 'red',
    fontSize: '30px'
}
let jsx = <div style={style}>jsx.....</div>;

ReactDOM.render(
    jsx, 
    document.getElementById("app")
);