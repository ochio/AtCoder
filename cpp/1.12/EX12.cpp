#include <bits/stdc++.h>
using namespace std;
 
int main() {
  string S;
  cin >> S;
 
	int s = 1;
  for(int i=1; i<S.size(); i+=2){
			char op = S[i];
			if(op == '+'){
				s += 1;
			}else{
				s -=1;
			}
	}
	cout << s << endl;
}