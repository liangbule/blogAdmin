import {useNavigate} from "react-router-dom";

/***
 * 路由跳转
 * @param {string} name 属性
 * @return gotoPage
 */

export const gotoPage = (name: string) => {
    const Navigate = useNavigate()
    Navigate(name)
}