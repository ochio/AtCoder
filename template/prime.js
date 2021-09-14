function trialDivision(number) {
	if (number % 1 !== 0) {
		return false;
	}

	if (number <= 1) {
		return false;
	}

	if (number <= 3) {
		return true;
	}

	if (number % 2 === 0) {
		return false;
	}

	const dividerLimit = Math.sqrt(number);
	for (let divider = 3; divider <= dividerLimit; divider += 2) {
		if (number % divider === 0) {
			return false;
		}
	}

	return true;
}

// 素因数分解
function primeFactorization(v) {
	let value = v;
	let exponent = 0;
	let divisors = [];

	for (let number = 2; number * number <= value; number++) {
		if (value % number === 0) {
			exponent = 0;
			while (value % number === 0) {
				exponent++;
				value /= number;
			}

			divisors.push({ number, exponent });
		}
	}
	if (value !== 1) {
		divisors.push({ number: value, exponent: 1 });
	}

	return divisors;
}
