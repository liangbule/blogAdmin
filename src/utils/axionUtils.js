import axios from 'axios';
import {createBrowserHistory} from "history"

let history = createBrowserHistory()

let http = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    // withCredentials: true,//携带 本地凭据 比如cookies
})

// 全局的请求拦截器 对接口的请求批量进行统一处理
http.interceptors.request.use(config => {
    //携带token过去
    let token = JSON.parse(localStorage.getItem('qf-token'));
    config.headers.authorization = token
    return config
}, function (error) {
    return Promise.reject(error)
})


// 全局的响应拦截 统一进行处理
http.interceptors.response.use(config => {
    console.log('全局拦截', config);
    if (config.data.code === '10022') {
        // 登录过期
        //跳转到login页 清除token
        localStorage.removeItem('qf-token')
        history.push('/login')
        window.location.reload()
    }

    return config//如果不return axios请求就拿不到响应结果
}, function (error) {
    return Promise.reject(error)
})


export default http