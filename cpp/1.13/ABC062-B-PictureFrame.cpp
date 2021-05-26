#include <bits/stdc++.h>
using namespace std;

int main(){
	int H, W;
	cin >> H >> W;
	int sum = H*W;
	vector<string> pic(sum);

	string u = "##";
	for(int i = 0; i < W; i++){
		u += "#";
	}
	cout << u << endl;

	for(int h = 0; h < H; h++ ){
		cout << '#';
		cin >> pic.at(h);
		cout << pic.at(h);
		cout << '#' << endl;
	}

	cout << u << endl;

}