import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 18
        }
    }
    render() {
        return (
            <div>
                <p>I am {this.state.age} years old</p>
            </div>
        );
    }
}
class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return <h1>{this.props.children}</h1>
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="">
                 <Title>
                     <span>App Span</span>
                     <a href="">link</a>
                 </Title>
                 <hr/>
                 <Component/>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("app")
)
