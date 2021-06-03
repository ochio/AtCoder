#include <bits/stdc++.h>
using namespace std;

int main(){
  int H, W; cin >> H >> W;
  vector<vector<char>> table(H, vector<char>(W));

  vector<string> data(H);
  for(int i = 0; i < H; i++){
    cin >> data.at(i);
  }

  for(int i = 0; i < H; i++){
    for(int j = 0; j < W; j++){
      table.at(i).at(j) = data.at(i).at(j);
    }
  }

  vector<vector<char>> preans(0, vector<char>(0));
  for(int i = 0; i < H; i++){
    bool isValid = true;
    for(int j = 0; j < W; j++){
      if(table.at(i).at(j) == '#'){
        isValid = false;
      }
    }
    if(!isValid) preans.push_back(table.at(i));
  }

  vector<vector<char>> ans(preans.size(), vector<char>(0));
  for(int i = 0; i < preans.at(0).size(); i++){
    bool isValidColumn = true;
    for(int j = 0; j < preans.size(); j++){
      if(preans.at(j).at(i) == '#'){
        isValidColumn = false;
      }
    }
    if(!isValidColumn){
      for(int j = 0; j < preans.size(); j++){
        ans.at(j).push_back(preans.at(j).at(i));
      }
    }
  }

  for(int i = 0; i < ans.size(); i++){
    for(int j = 0; j < ans.at(0).size(); j++){
      cout << ans.at(i).at(j);
      if(j == ans.at(0).size() - 1){
        cout << endl;
      }
    }
  }
}