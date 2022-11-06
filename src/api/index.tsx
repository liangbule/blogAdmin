import http from "../utils/axionUtils"

//用户登录
export const loginApi = (username: any, password: any) => http.post('/user/signing', {username, password})
//查询用户信息
export const getUserInfo = (params: any) => http.get('/user/getUserInfo', {params})
export const getArts = (params = {}) => http.get('article/get', {params})
// 文件上传
export const setUploadFile = () => http.post('/uploadFile/upload-single-file')
//获取商品类目
export const getCategory = () => http.get('/category/getCategory')

// 文章
export const addArticle = () => http.get('/category/getCategory')
export const editeArt = () => http.get('/category/getCategory')
export const getArtId = () => http.get('/category/getCategory')
export const mdArt = (res: any) => http.get('/category/getCategory', res)
export const fetchTag = () => http.get('/category/getCategory')
// 自定义请求
export const allRequest = (url: any, type: any, data: any) => {
    return http.request({
        url: url,
        method: type,
        data, // 请求类型为post
        // params: data,// 请求类型为get
    })
}