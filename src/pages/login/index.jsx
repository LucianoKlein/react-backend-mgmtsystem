import React from 'react';
import './index.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    //当用户名发生改变
    onInputChange(e) {
        let inputValue = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }
    onSubmit(e) {

    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">Welcome - MMALL Admin Dashboard</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" 
                                       className="form-control" 
                                       id="exampleInputEmail1" 
                                       placeholder="Email" 
                                       name="username"
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" 
                                       className="form-control" 
                                       id="exampleInputPassword1" 
                                       placeholder="Password" 
                                       name="password"
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button onClick={e => onSubmit(e)} className="btn btn-md btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;