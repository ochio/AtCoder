#include <bits/stdc++.h>
using namespace std;

int main(){
  int N;cin >> N;
  tuple<string, int, int> row;
  vector<tuple<string, int, int>> data;

  for(int i = 0; i < N; i++){
    string S;
    int P;
    cin >> S >> P;
    row = make_tuple(S,P,i);
    data.push_back(row);
  }
  sort(data.begin(), data.end(), []( const auto &x, const auto &y ){
    return get<0>(x) == get<0>(y) ? get<1>(x) > get<1>(y) : get<0>(x) < get<0>(y);
  });

  for(int i = 0; i < N; i++){
    int index;
    tie(ignore, ignore, index) = data.at(i);
    cout << index+1 << endl;
  }
}

