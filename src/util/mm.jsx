class MUtil {
    request(param) {
        return new Promise((resolve, reject)=>{
            $.ajax({
                type           : param.type     || 'get',
                url            : param.url      || '',
                dataType       : param.dataType || 'json',
                data           : param.data     || null,
                success: (res) => {
                    if(0 === res.status) {
                        //数据请求成功
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                        
                    } else if(10 === res.status) {
                       //做登录 
                       this.doLogin();
                    } else {
                       //当成错误处理
                       typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: (err) => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            }) 
        });
    }
    //跳转登录
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    getUrlParam(name) {
        //xxxx.com?param=123&param1=456
        let queryString = window.location.search.split('?')[1] || '';
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
    errorTips(errMsg) {
        // alert(errMsg || '好像哪里不对了');
        console.debug(errMsg || '好像哪里不对了');
    }
    successTips(successMsg) {
        // alert(errMsg || '好像哪里不对了');
        console.debug(successMsg || '操作成功');
    }
    setStorage(name, data) {
        let dataType = typeof data;
        if (dataType = 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        } else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0){
            //基础类型

        } else {
            throw new Error('该类型不可以用于本地存储');
        }

    }
    //取出本地存储内容
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        } else {
            return '';
        }
    }
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }

}

export default MUtil;

