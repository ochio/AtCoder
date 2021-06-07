#include <bits/stdc++.h>
using namespace std;

int main(){
  int N;
  scanf("%d", &N);
  using p = pair<int, int>;
  vector<p> data(N);
  for(int i = 0; i < N; i++){
    int A, B;
    scanf("%d%d", &A, &B);
    p row;
    row = p(B,A);
    data.at(i) = row;
  }
  sort(data.begin(), data.end());


  for(int i = 0; i < N; i++){
    printf("%d %d\n",  data.at(i).second, data.at(i).first);
  }
}