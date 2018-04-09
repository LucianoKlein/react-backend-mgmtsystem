import React from 'react';
import ReactDOM from 'react-dom';

function Component() {
    return <h1>hahahaha</h1>;
}
class ES6Component extends React.Component {
    render() {
        return <h1>I am hexin in es6</h1>
    }
}

ReactDOM.render(
    <ES6Component/>,
    document.getElementById("app")
)
