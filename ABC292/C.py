import math


N = int(input())

ans = 0
for AB in range(1,N):
    CD = N - AB
    c = 0
    for i in range(1, int(math.sqrt(AB))+1):
          if AB % i == 0:
                c+=1
                if AB != i*i:
                      c+=1
    d = 0
    for i in range(1, int(math.sqrt(CD))+1):
          if CD % i == 0:
                d+=1
                if CD != i*i:
                      d+=1
    ans += c * d
print(ans)