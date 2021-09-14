// 最小公倍数
function lcm(a, b) {
	return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}

//最大公約数
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}
