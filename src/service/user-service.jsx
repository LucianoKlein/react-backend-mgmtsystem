import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
class User {
    //用户登录
    login(loginInfo) {
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    //退出登录
    logout() {
        return _mm.request({
            type: 'post',
            url: '/user/logout.do'
        })
    }
    //检查登录接口的数据是不是合法
    checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        //判断用户名为空
        if(typeof username !== 'string' || loginInfo.username.length === 0) {
            return {
                status: false,
                msg: '用户名不能为空'
            } 
        }

        //判断密码为空
        if(typeof password !== 'string' || loginInfo.password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空'
            } 
        }
        return {
            status : true,
            msg: "验证通过"
        }
    }
}

export default User;