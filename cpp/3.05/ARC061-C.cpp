#include <bits/stdc++.h>
using namespace std;

int main(){
	string S;cin >> S;
	int l = S.length()- 1;

	long long ans = 0;
	for(int bit = 0; bit < (1<<l); bit++){
		long long sm = 0;
		long long a = S[0] - '0';

		for(int i = 0; i < l; i++){
			if( bit & ( 1 << i)){
				sm += a;
				a = 0;
			}
			a = a * 10 + S[i+1]-'0';
		}
		sm += a;
		ans += sm;
	}
	cout << ans << endl;
}