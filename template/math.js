function lcm(a, b) {
	return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}
