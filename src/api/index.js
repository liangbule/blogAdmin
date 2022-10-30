import http from "../utils/axionUtils"

//用户登录
export const loginApi = (username, password) => http.post('/user/signing', {username, password},)
//查询用户信息
export const getUserInfo = (username, password) => http.get('/user/getUserInfo', {username, password})
// 文件上传
export const setUploadFile = () => http.post('/uploadFile/upload-single-file')
//获取商品类目
export const getCategory = () => http.get('/category/getCategory')

// 自定义请求
export const allRequest = (url, type, data) => {
    return http.request({
        url: url,
        method: type,
        data, // 请求类型为post
        // params: data,// 请求类型为get
    })
}