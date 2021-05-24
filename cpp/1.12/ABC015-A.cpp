#include <bits/stdc++.h>
using namespace std;

int main(){
	string A,B;
	cin >> A >> B;

	int size_A = A.size();
	int size_B = B.size();
	if(size_A > size_B){
		cout << A << endl;
	}else{
		cout << B << endl;
	}
}