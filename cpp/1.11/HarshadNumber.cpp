#include <bits/stdc++.h>
using namespace std;

int main(){
	int N;
	cin >> N;

	int sum = 0;
	int tmp = N;

	while(tmp){
		sum += tmp % 10;
		tmp /= 10;
	}

	if(N % sum == 0) cout << "Yes" << endl;
	else cout << "No" << endl;

}