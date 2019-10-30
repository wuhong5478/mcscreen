export function dateFormat(formatDate, format) {
	if(!formatDate) {
		return "";
	}
	var formatDate = new Date(formatDate);

	var date = {
		"M+": formatDate.getMonth() + 1,
		"d+": formatDate.getDate(),
		"h+": formatDate.getHours(),
		"m+": formatDate.getMinutes(),
		"s+": formatDate.getSeconds(),
		"q+": Math.floor((formatDate.getMonth() + 3) / 3),
		"S+": formatDate.getMilliseconds()
	};
	if(/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (formatDate.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for(var k in date) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
				date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}

export function imgUrlAddBase(data) {
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var basePath = localObj.protocol + "//" + localObj.host + "/upload/";
	return basePath + data;
}

export function imgUrlAddBaseArr(data) {
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var basePath = localObj.protocol + "//" + localObj.host + "/upload/";
	var arr = [];
	if(!!data) {
		arr.push({
			url: basePath + data
		});
	}
	return arr;
}