#include <bits/stdc++.h>
using namespace std;

int main(){
	int N; cin >> N;
	vector<int> ary(N);
	for(int i = 0; i < N ; i++){
		cin >> ary.at(i);
	}
	sort(ary.begin(), ary.end());

	vector<int> ans = {};
	int d = 0;

	for(int i = 0; i < N; i++){
		if(d < ary.at(i)){
			d = ary.at(i);
			ans.push_back(d);
		}
	}

	cout << ans.size() << endl;
}