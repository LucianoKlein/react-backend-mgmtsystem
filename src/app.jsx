import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(e) {
        this.props.onChild2BgColorChange('red');
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {this.handleClick(e)}}>改变Child2组件颜色</button>
            </div>
        );
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{background: this.props.bgColor}}>
                <h1>Child2背景颜色: {this.props.bgColor}</h1>
            </div>
        );
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            child2BgColor: "#999"
        }
    }
    changeChild2BgColor(color) {
        this.setState({
            child2BgColor: color
        })
    }
    render(props) {
        return (
            <div>
                <Child1 onChild2BgColorChange={(color) => {this.changeChild2BgColor(color)}}/>
                <Child2 bgColor={this.state.child2BgColor}/>
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
