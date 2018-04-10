import React from 'react';
import ReactDOM from 'react-dom';

class Son extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Old Props'
        };
        console.log('初始化数据，constructor');
    }
    handleClick() {
        console.log('更新父组件数据');

    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        return (
            <div>
                <div>Props: {this.props.data}</div>
                <button onClick={() => { this.handleClick() }}>更新组件</button>
            </div>
        )
    }
}

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Old Props',
            hasChild: true
        }
        console.log('初始化数据', 'constructor');
    }
    onPropsChange() {
       console.log("父组件的onPropsChange调用了");
       this.setState({
            data: 'New New Props'
       }) 
    }
    onDestroyChild() {
        console.log('干掉子组件');
        this.setState({
            hasChild: false
        })
    }
    render() {
        return (
        <div>
            {
                this.state.hasChild ? <Son data = {this.state.data}></Son> : null
            }
            <button onClick={() => { this.onPropsChange() }}>改变Props</button>
            <button onClick={() => { this.onDestroyChild() }}>干掉子组件</button>
        </div>) ;
    }
}

ReactDOM.render(
    <App2/>,
    document.getElementById("app")
)
