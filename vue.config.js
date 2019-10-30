var webpack = require('webpack');

module.exports = {
	devServer:{
		port:9000,
		proxy: {
			'/SSOServer': {
	        	target: 'http://192.193.194.6:8080',
			    changeOrigin: true,
			    pathRewrite: {
	            	'^/SSOServer': '/SSOServer'
	            }
			}
		}
	},
	configureWebpack: {
		externals: {
	    	AMap: 'AMap', // 高德地图配置
	    	AMapUI: "AMapUI"
	    }
	},
}
