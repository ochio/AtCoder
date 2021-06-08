#define _GLIBCXX_DEBUG
#include <bits/stdc++.h>
using namespace std;
 
int main() {
  int N;
  cin >> N;
  map<int, int> score;
  for(int i = 0; i < N; i++){
    int num;
    scanf("%d", &num);
    if(score.count(num)){
      score.at(num) += 1;
    }else{
      score[num] = 1;
    }
  }

  pair<int, int> max(0,0);
  for(auto p : score){
    auto k = p.first;
    auto v = p.second;
    if(max.second < v){
      max = make_pair(k,v);
    }
  }
  printf("%d %d\n", max.first, max.second);

}