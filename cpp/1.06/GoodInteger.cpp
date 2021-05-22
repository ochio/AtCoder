#include <bits/stdc++.h>
using namespace std;

int main(){
	int N;
	cin >> N;
	int divide10 = N / 10;
	int divide1000 = N % 1000;

	if((divide10 % 111 == 0) || (divide1000 % 111 == 0)){
		cout << "Yes" << endl;
		return 0;
	}else{
		cout << "No" << endl;
		return 0;
	}

}