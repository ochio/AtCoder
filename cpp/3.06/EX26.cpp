#include <bits/stdc++.h>
using namespace std;

void Int(map<char, int> &vars){
	int sum = 0;
	char var, op;
	bool flag = true;
	vector<char> n;

	cin >> var;
	while(flag){
		char input;
		cin >> input;
		if(input == '='){
			continue;
		}
		n.push_back(input);

		if(input == ';') flag = false;
	}

	sum += n.at(0) - '0';

	for(int i = 1; i < n.size(); i+=2){
		if(i + 1 > n.size()) break;
		if(n.at(i) == '+'){
			sum += n.at(i+1) - '0';
		}else if(n.at(i) == '-'){
			sum -= n.at(i+1) - '0';
		}
	}

	vars[var] = sum;

	return;
}

void print_int(map<char, int> &vars){
	bool flag = true;
	vector<char> n;
	int sum = 0;

	while(flag){
		char input;
		cin >> input;
		if(input == ';') {
			flag = false;
			break;
		}
		n.push_back(input);
	}

	for(int i = 0; i < n.size(); i= i + 2){
		if((0 <= n.at(i) - '0') && (n.at(i) - '0' <= 9)){
			int target = n.at(i) - '0';
			if(i=0 || n.at(i-1) == '+'){
				sum += target;
			}else if(n.at(i-1) == '-'){
				sum -= target;
			}
		}else{
			char v = n.at(i);
			if(i==0 || n.at(i-1) == '+'){
				sum += vars[v];
			}else if(n.at(i-1) == '-'){
				sum -= vars[v];
			}
		}
	}

	cout << sum << endl;
}

void vec(map<char, vector<int>> &varsVec){
	char var;
	bool flag = true;
	vector<int> n;

	cin >> var;
	while(flag){
		char input;
		cin >> input;
		if(input == '=' || input == '[' || input == ']' || input == ','){
			continue;
		}
		int convertToNum = input - '0';
		n.push_back(convertToNum);

		if(input == ';') flag = false;
	}

	varsVec[var] = n;
}

void print_vec(map<char,vector<int>> &varsVec) {
	bool flag = true;
	vector<char> n;

	while(flag){
		char input;
		cin >> input;
		if(input == ';') {
			flag = false;
			break;
		}
		n.push_back(input);
	}
	
  cout << "[ ";
  for (int i = 0; i < vec.size(); i++) {
    cout << vec.at(i) << " ";
  }
  cout << "]" << endl;
}

int main(){
	int N;cin >> N;
	map<char,int> vars;
	map<char,vector<int>> varsVec;
	for(int k = 0; k < N; k++){
		string order;cin >> order;
		if(order == "int"){
			Int(vars);
		}
		if(order == "print_int"){
			print_int(vars);
		}
		if(order == "vec"){
			vec(varsVec);
		}
		if(order == "print_vec"){
			print_vec(varsVec);
		}
	}
}