#include <bits/stdc++.h>
using namespace std;

int main(){
	int N; cin >> N;
	vector<string> blue(N);
	for(int i = 0; i < N; i++){
		cin >> blue.at(i);
	}

	int M; cin >> M;
	vector<string> red(M);
	for(int i = 0; i < M; i++){
		cin >> red.at(i);
	}

	int max = 0;
	for(int i = 0; i < N; i++){
		int match = 1;
		for(int j = i+1; j < N; j++){
			if(blue.at(i) == blue.at(j)){
				match ++;
			}
		}
		for(int k = 0; k < M; k++){
			if(blue.at(i) == red.at(k)){
				match --;
			}
		}
		if(max < match) max = match;
	}
	cout << max << endl;
}