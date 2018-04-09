import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(e) {
        this.props.changeColor('red');
    }

    render() {
        return (
            <div>
                <h1>父组件的背景色： {this.props.bgColor}</h1>
                <button onClick={(e) => {this.handleClick(e)}}>改变父组件颜色</button>
            </div>
        );
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "#999"
        }
    }
    onBgColorChange(color) {
        this.setState({
            bgColor: color
        })
    }
    render(props) {
        return (
            <div style={{background: this.state.bgColor}}>
                <Child bgColor={this.state.bgColor} changeColor={(color)=>{this.onBgColorChange(color)}}/>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Father/>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("app")
)
