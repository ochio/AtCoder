#include <bits/stdc++.h>
using namespace std;

int main(){
	int a,b;
	cin >> a >> b;
	int SUM = a * b;
	if(SUM % 2 == 0 ){
		cout << "Even" << endl;
	}else{
		cout << "Odd" << endl;
	}
}