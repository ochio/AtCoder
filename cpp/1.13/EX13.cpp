#include <bits/stdc++.h>
using namespace std;

int main(){
	int N;
	cin >> N;

	int sum = 0;
	vector<int> point(N);
	for(int i = 0; i < N; i++){
		cin >> point.at(i);
		sum += point.at(i);
	}

	int av = sum / N;
	for(int i = 0; i < N; i++){
		int diff = point.at(i) - av;
		if(diff < 0) diff = diff * -1;
		cout << diff << endl;
	}
}