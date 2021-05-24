#include <bits/stdc++.h>
using namespace std;

int main(){
	char op;
	int A, B;
	cin >> A >> op >> B;

	if(op == '+' ){
		cout << A + B << endl;
	}else{
		cout << A - B << endl;
	}
}