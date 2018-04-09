import React from 'react';
import ReactDOM from 'react-dom';

class ES6Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Rosen"
        }
    }
    render() {
        setTimeout(() => {
            this.setState({
                name: "ahhaha"
            });
        }, 2000);
        return <h1>I am {this.state.name}</h1>
    }
}

ReactDOM.render(
    <ES6Component/>,
    document.getElementById("app")
)
