import React from 'react';
import ReactDOM from 'react-dom';

let name = 'hexin';
let flag = false;
let jsx = (
    <div>
        {
            flag ? <p>I am {name}</p> : <p>I am not {name}</p>
        }
    </div>
);

ReactDOM.render(
    jsx,
    document.getElementById("app")
)