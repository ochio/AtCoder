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

const runLength2 = {
	compress: function (s) {
		const ary = [];
		let c = s[0];
		let n = 1;
		for (let i = 1; i < s.length; i++) {
			if (c === s[i]) {
				n++;
			} else {
				ary.push([c, n]);
				c = s[i];
				n = 1;
			}
		}
		ary.push([c, n]);

		return ary;
	},
};
