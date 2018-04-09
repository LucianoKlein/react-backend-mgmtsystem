import React from 'react';
import ReactDOM from 'react-dom';

let names = ['Rosen', 'Geely', 'Jimin'];
let jsx = (
    <div>
        {/*数组循环*/}
        {
            names.map((name, index) => <p key={index}>Hello, I am {name}</p>)
        }

    </div>
);

ReactDOM.render(
    jsx,
    document.getElementById("app")
)