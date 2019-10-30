import axios from 'axios'
import router from '../router/router'
import Cookies from 'js-cookie';
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
	timeout: 5000 // 请求超时时间
})

//接口路径
service.BASEURL = '/SSOServer';
// request拦截器
service.interceptors.request.use(
	config => {
		config.headers['api-key'] = "ssoclient" // 让每个请求携带自定义token
		return config
	},
	error => {
		// Do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// response 拦截器
service.interceptors.response.use(
	response => {
		/**
		 * code为非200是抛错 
		 */
		const res = response.data;
		if(res.errno&& (res.errno !== 1&&res.errno !== 200) ) {
			if(res.errno==401){
				Cookies.set('isLogin',0);
	            router.push({ path: '/login' }); 
			}
			Message({
				message: res.error||"请求出错",
				type: 'error',
				duration: 3 * 1000
			})
			return Promise.reject('error')
		} else {
			return response.data
		}
	},
	error => {
		console.log('err' + error) // for debug
		Message({
			message: error.message,
			type: 'error',
			duration: 3 * 1000
		})
		return Promise.reject(error)
	}
)

export default service