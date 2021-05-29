#include <bits/stdc++.h>
using namespace std;

int main(){
	int N; cin >> N;
	vector<int> ary(N);

	for(int i=0; i<N; i++){
		cin >> ary.at(i);
	}

	int MAX = 100000;
	int c = 1;
	int target = ary.at(0);
	while(target != 2){
		target = ary.at(target - 1);
		c += 1;


		if(c > MAX){
			cout << -1 << endl;
			return 0;
		}
	}
	cout << c << endl;
}