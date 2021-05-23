#include <bits/stdc++.h>
using namespace std;

int main(){
	int N;
	cin >> N;

	int min = 100;
	for(int i=0; i<N; i++){
		int A;
		cin >> A;
		int r=0;
		if(A == 0){
			r = 0;
		}else{
			while(A%2 == 0){
				A = A / 2;
				r++;
			}
		}
		if(r <= min) min = r;
	}
	cout << min << endl;
}