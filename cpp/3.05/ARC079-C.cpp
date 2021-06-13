#include <bits/stdc++.h>
using namespace std;

int main(){
	string ABCD; cin >> ABCD;
	int A = ABCD[0] - '0';
	int B = ABCD[1] - '0';
	int C = ABCD[2] - '0';
	int D = ABCD[3] - '0';

	if(A+B+C+D == 7){
		printf("%d+%d+%d+%d=7\n", A,B,C,D);
	}else if(A+B+C-D == 7){
		printf("%d+%d+%d-%d=7\n", A,B,C,D);
	}else if(A+B-C+D == 7){
		printf("%d+%d-%d+%d=7\n", A,B,C,D);
	}else if(A+B-C-D == 7){
		printf("%d+%d-%d-%d=7\n", A,B,C,D);
	}else if(A-B+C+D == 7){
		printf("%d-%d+%d+%d=7\n", A,B,C,D);
	}else if(A-B+C-D == 7){
		printf("%d-%d+%d-%d=7\n", A,B,C,D);
	}else if(A-B-C-D == 7){
		printf("%d-%d-%d-%d=7\n", A,B,C,D);
	}else if(A-B-C+D == 7){
		printf("%d-%d-%d+%d=7\n", A,B,C,D);
	}
}