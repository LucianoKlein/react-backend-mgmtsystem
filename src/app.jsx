import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
class A extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>Component A</div>
                <Switch>
                    <Route exact path={`${this.props.match.path}/`} 
                        render={(route) => {
                            return <div>当前组件是没有参数的A</div>
                        }}/>
                    <Route path={`${this.props.match.path}/sub`} 
                        render={(route) => {
                            return <div>当前组件sub</div>
                        }}/>
                    <Route path={`${this.props.match.path}/:id`} 
                        render={(route) => {
                            return <div>当前组件是带参数的A, 参数是: {route.match.params.id}</div>
                        }}/>
                </Switch>
            </div>  
        )
    }
}

class B extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Component B</div>
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br/>
                <Link to="/a/123">带参数的组件A</Link>
                <br/>
                <Link to="/b">组件B</Link>
                <br/>
                <Link to="/a/sub">/a/sub</Link>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render( 
    <Router>
        <Wrapper>
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>,
    document.getElementById("app")
)