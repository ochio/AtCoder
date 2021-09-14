// ランレングス
const runLength = {
	compress: function (s) {
		return s.replace(/([\s\S])\1{0,8}/g, function (a, c) {
			return c + a.length;
		});
	},
	decompress: function (s) {
		return s.replace(/([\s\S])(\d)/g, function (a, c, n) {
			return new Array(++n).join(c);
		});
	},
};
