#include <bits/stdc++.h>
using namespace std;

int main(){
	int N; cin >> N;
	int a = 0, b = 0;
	vector<int> ary(N);
	for(int i = 0; i < N; i ++){
		cin >> ary.at(i);
	}

	sort(ary.begin(), ary.end(), [](int a, int b){
		return a > b;
	});

	for(int i = 0; i < N; i ++){
		if(i%2 == 0){
			a += ary.at(i);
		}else{
			b += ary.at(i);
		}
	}

	cout << a - b << endl;
}