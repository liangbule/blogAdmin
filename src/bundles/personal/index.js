import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../App';
import {isLogin} from '../../utils/isLoginUtild'
import {cookieStore} from '../../utils/storeUtils'
import images from '../../image/52FB6D20FF8FADA236C2EC9F61CCD11D.png'

if (module.hot) {
//    判断是否支持热模块
    module.hot.accept('../utils/isLoginUtild')
    console.log(isLogin(), cookieStore(), images)
}
new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000)
})
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
