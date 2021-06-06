#include <bits/stdc++.h>
using namespace std;

int64_t rec(int i, int64_t &sum, vector<int64_t> &memo){
	if(memo.at(i) != 0 ){
		return memo.at(i);
	}

	memo.at(i) = rec(i-1, sum, memo) + rec(i-2, sum, memo);

	return memo.at(i);
}

int main(){
	int x;
	scanf("%d", &x);
	vector<int64_t> memo(87, 0);
	memo.at(0) = 2;
	memo.at(1) = 1;

	int64_t sum = 0;

	printf("%ld\n", rec(x, sum, memo));
}