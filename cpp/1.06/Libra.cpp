#include <bits/stdc++.h>
using namespace std;

int main(){
	int a,b,c,d;
	cin >> a >> b >> c >> d;
	int left = a + b;
	int right = c + d;
	if(left == right) puts("Balanced");
	else if(left < right) puts("Right");
	else if(left > right) puts("Left");
}