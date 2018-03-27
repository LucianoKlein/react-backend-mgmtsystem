new Promise((resolve, reject) => {
    // 异步函数
    $.ajax({
        url: 'http://happymmall.com/user/get_user_info.do',
        type: 'post',
        success(res) {
            resolve(res);
        },
        error(err) {
            reject(err);
        }
    });
}).then((res)=>{
    console.log('success', res);
}, (err)=>{
    console.log('error:', err);
});

let promisFn1 = new Promise(() => {
    $.ajax({
    })
});

let promiseFn2 = new Promise(()=>{
    $.ajax({

    })
});

promisFn1.then(()=>{
    return promiseFn2;
}).then(()=>{
    console.log();
});

