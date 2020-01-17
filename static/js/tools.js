import CryptoJS from './crypto-js.js'

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

export default{
	getAesString:getAesString,
	getDAesString:getDAesString
}