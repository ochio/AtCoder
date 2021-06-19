#include <bits/stdc++.h>
using namespace std;

int main(){
	int N;cin >> N;
	vector<int> A;
	for(int i = 0; i < N; i++){
		int tmp; cin >> tmp;
		A.push_back(tmp);
	}
	int c = 0;

	for(int i = 0; i < N; i++){
		for(int j = i + 1; j < N; j++){
			if(A.at(i) != A.at(j)){
				c++;
			}
		}
	}

	printf("%d\n", c);
}