import CryptoJS from './crypto-js.js'

const urlStr = 'http://qidou.eezzz.cn/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=';
/* 
参数
url      请求路径
data     参数传值
method   请求方式
header   自定义请求头
*/
const myRequest = function(url, data, method) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: urlStr + url,
			data: data,
			method: method,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail(error) {
				reject(error.data);
			}
		});
	})
}

/* 
参数
data 需加密数据
key  秘钥
iv   矢量
*/
function getAesString(data, key, iv) { //加密
	let keyed = CryptoJS.enc.Utf8.parse(key); // 加密秘钥
	let ived = CryptoJS.enc.Utf8.parse(iv); //  矢量
	let encryptResult = CryptoJS.AES.encrypt(data, keyed, { //  AES加密
		iv: ived,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7 // 后台用的是pad.Pkcs5,前台对应为Pkcs7
	});
	return CryptoJS.enc.Base64.stringify(encryptResult.ciphertext); // Base64加密;
}

function getDAesString(data, key, iv) { //解密
	var keyed = CryptoJS.enc.Utf8.parse(key);
	var ived = CryptoJS.enc.Utf8.parse(iv);
	let baseResult = CryptoJS.enc.Base64.parse(data); // Base64解密
	let ciphertext = CryptoJS.enc.Base64.stringify(baseResult); // Base64解密
	let decryptResult = CryptoJS.AES.decrypt(ciphertext, keyed, { //  AES解密
		iv: ived,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return CryptoJS.enc.Utf8.stringify(decryptResult)
}
/**
 * @param {Object} timespan
 * 时间转换
 */
function timeFormat(time) {
	if (time > 0) {
		var result
		time = parseInt(time) * 1000;
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var month = day * 30;
		var now = new Date().getTime();
		var diffValue = now - time;
		if (diffValue < 0) {
			return
		}
		var monthC = diffValue / month;
		var weekC = diffValue / (7 * day);
		var dayC = diffValue / day;
		var hourC = diffValue / hour;
		var minC = diffValue / minute;
		if (monthC >= 1) {
			if (monthC <= 12) {
				result = "" + parseInt(monthC) + "月前";
			} else {
				result = "" + parseInt(monthC / 12) + "年前";
			}
		} else if (weekC >= 1) {
			result = "" + parseInt(weekC) + "周前";
		} else if (dayC >= 1) {
			result = "" + parseInt(dayC) + "天前";
		} else if (hourC >= 1) {
			result = "" + parseInt(hourC) + "小时前";
		} else if (minC >= 1) {
			result = "" + parseInt(minC) + "分钟前";
		} else {
			result = "刚刚";
		}
		return result
	} else {
		return '';
	}
}

function timestampToTime(timestamp) {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = date.getDate() + ' ';
	var h = date.getHours() + ':';
	var m = date.getMinutes() + ':';
	var s = date.getSeconds();
	return Y + M + D + h + m + s;
}
export default {
	getAesString: getAesString,
	getDAesString: getDAesString,
	myRequest: myRequest,
	timeFormat: timeFormat,
	timestampToTime: timestampToTime
}
