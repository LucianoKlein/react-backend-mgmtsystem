import React from 'react';
import './index.scss';
import MUtil from 'util/mm.jsx'
import User  from 'service/user-service.jsx'
const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount() {
        document.title = '登录 - MMAL ADMIN'
    }
    //当用户名发生改变
    onInputChange(e) {
        let inputValue = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        })
    }
    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }
    onSubmit(e) {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        };
        let checkResult = _user.checkLoginInfo(loginInfo);
        //验证通过
        if (checkResult.status) {
            _user.login(loginInfo).then((res) => {
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        } else {
            //验证不通过
            _mm.errorTips(checkResult.msg)
        }
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
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" 
                                       className="form-control" 
                                       id="exampleInputPassword1" 
                                       placeholder="Password" 
                                       name="password"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button onClick={e => this.onSubmit(e)} className="btn btn-md btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;