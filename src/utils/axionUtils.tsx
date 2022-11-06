import axios, {AxiosRequestConfig} from 'axios';
import {createBrowserHistory} from "history"
import {CommonUtils} from "../utils";

let history = createBrowserHistory()

let http = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    // withCredentials: true,//携带 本地凭据 比如cookies
})

// 全局的请求拦截器 对接口的请求批量进行统一处理
http.interceptors.request.use((config: any) => {
    //携带token过去
    let token = JSON.parse(localStorage.getItem('token') || "");
    if (token && config.headers) {
        config.headers['Authorization'] = token;
    }
    return config
}, function (error) {
    return Promise.reject(error)
})


// 全局的响应拦截 统一进行处理
http.interceptors.response.use(config => {
    if (config.status == 200) {
        return Promise.resolve(config.data)
    } else {
        return Promise.reject(config.data)
    }
    if (config.data.code === '10022') {
        // 登录过期
        //跳转到login页 清除token
        localStorage.removeItem('token')
        history.push('/login')
        window.location.reload()
    }

    return config//如果不return axios请求就拿不到响应结果
}, function (error) {
    switch (error.response.status) {
        case 401:
            // const instance = ElMessage.error('用户信息过期，请重新登录');
            setTimeout(() => {
                // instance.close();
                CommonUtils.gotoPage("login")
            }, 1000);
            break;
        default:
            console.warn(`status= ${status}`);
            break;
    }
    return Promise.reject(error)
})

// //封装get请求
// const get = (url: string, options?: AxiosRequestConfig) => {
//     return this.request({
//         url: url,
//         method: 'get',
//         params: options
//     })
// }
// //封装post请求
// const post = (url: string, options: AxiosRequestConfig) => {
//     return this.request({
//         url: url,
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data: options
//     })
// }


export default http