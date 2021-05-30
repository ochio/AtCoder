#include <bits/stdc++.h>
using namespace std;

int main(){
	int N; cin >> N;
	int a = 0, b = 0;
	vector<int> ary(N);
	for(int i = 0; i < N; i ++){
		cin >> ary.at(i);
	}

	for(int i = 0; i < N; i ++){
		int num = *max_element(ary.begin(), ary.end());

		if(i%2 == 0){
			a += num;
		}else{
			b += num;
		}

		for(int j=0; j < N; j++){
			if(ary.at(j) == num){
				ary.at(j) = 0;
				break;
			}
		}

	}

	cout << a - b << endl;
}