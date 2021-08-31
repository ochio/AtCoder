'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const odd = ary.filter((v, i) => i % 2 === 0);
	const even = ary.filter((v, i) => i % 2 === 1);

	const obj1 = {};
	const obj2 = {};
	for (let i = 0; i < N / 2; i++) {
		obj1[odd[i]] = obj1[odd[i]] == null ? 1 : ++obj1[odd[i]];
		obj2[even[i]] = obj2[even[i]] == null ? 1 : ++obj2[even[i]];
	}

	if (Object.keys(obj1).length === 1 && Object.keys(obj2).length === 1 && odd[0] === even[0]) {
		console.log(odd.length);
		return;
	}

	const ele1 = [];
	for (let v in obj1) {
		const tmp = {
			number: v,
			count: obj1[v],
		};
		ele1.push(tmp);
	}
	ele1.sort((a, b) => (a.count > b.count ? -1 : 1));

	const ele2 = [];
	for (let v in obj2) {
		const tmp = {
			number: v,
			count: obj2[v],
		};
		ele2.push(tmp);
	}
	ele2.sort((a, b) => (a.count > b.count ? -1 : 1));

	let max1 = 0;
	let max2 = 0;
	let ans = 10 ** 5 + 1;
	if (ele1[0].number === ele2[0].number) {
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 2; j++) {
				if (ele1[i].number === ele2[j].number) continue;
				max1 = ele1[i].count;
				max2 = ele2[j].count;
				ans = Math.min(N - max1 - max2, ans);
			}
		}
	} else {
		max1 = ele1[0].count;
		max2 = ele2[0].count;
		ans = N - max1 - max2;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
