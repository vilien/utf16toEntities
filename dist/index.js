;(function(){
	function utf16toEntities(str) {
		var patt=/[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
		return str.replace(patt, function(char){
			var H, L, code;
			if (char.length===2) {
				H = char.charCodeAt(0); // 取出高位
				L = char.charCodeAt(1); // 取出低位
				code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
				return '&#' + code + ';';
			} else {
				return char;
			}
		});
	}
	module.exports = {
	    utf16toEntities : utf16toEntities
	};
})();
