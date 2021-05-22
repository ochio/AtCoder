#include <bits/stdc++.h>
using namespace std;

int main(){
	int N, A;
	cin >> N >> A;

	N = N % 500;
	if(N == 0){
		cout << "Yes" << endl;
	}else if(N < A){
		cout << "Yes" << endl;
	}else{
		cout << "No" << endl;
	}

}