#include <bits/stdc++.h>
using namespace std;

void Int(map<char, int> &vars){
	int sum = 0;
	char var;
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

void vec(map<char, int> &vars, map<char, vector<int>> &varsVec){
	char var;
	bool flag = true;
	vector<int> n;


	cin >> var;
	while(flag){
		char input;
		cin >> input;
		if(input == ';'){
			flag = false;
			break;
		}

		if(input == '=' || input == '[' || input == ']' || input == ','){
			continue;
		}else if(0 <= input - '0' && input - '0' <= 9){
			int convertToNum = input - '0';
			n.push_back(convertToNum);
		}else{
			n.push_back(vars[input]);
		}

	}

	varsVec[var] = n;
}

void print_vec(map<char,vector<int>> &varsVec) {
	bool flag = true;
	vector<vector<int>> n(0, vector<int>(0));
	vector<char> op;
	int index = 0;

	while(flag){
		char input;
		cin >> input;
		if(input == ';') {
			flag = false;
			break;
		}

		if( input == '[' || input == ']' || input == ','){
			if(input == '[') {
				n.push_back({});
			}else if(input == ']'){
				index++;
			}
			continue;
		}else if( input == '+' || input == '-'){
			op.push_back(input);
		}else if(0 <= input - '0' && input - '0' <= 9){
			n.at(index).push_back(input - '0');
		}else{
			for(int k = 0; k < varsVec[input].size(); k++){
				int v = varsVec[input].at(k);
				n.at(index).push_back(v);
			}
			index++;
			n.push_back({});
		}
	}

	vector<int> ans(n.at(0).size(), 0);
	for(int i = 0; i < n.at(0).size(); i++){
		if(op.size() > 0){
			for(int k = 0; k < op.size(); k++){
				if(op[k] == '+'){
					ans.at(i) = n.at(k + 1).at(i) + n.at(k + 2).at(i);
				}else if(op[k] == '-'){
					ans.at(i) = n.at(k + 1).at(i) - n.at(k + 2).at(i);
				}
			}
		}else{
			ans.at(i) = n.at(0).at(i);
		}
		
	}

		cout << ans.at(0) << " ";

  cout << "[ ";
  for (int i = 0; i < ans.size(); i++) {
		cout << ans.at(i) << " ";
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
			vec(vars,varsVec);
		}
		if(order == "print_vec"){
			print_vec(varsVec);
		}
	}
}