import math

N, A, B = map(int, input().split())
S = input()

ans = math.inf

for i in range(N):
    t = S[i:] + S[:i]
    c = 0
    for j in range(math.ceil(N / 2)):
        if t[j] != t[N - j - 1]:
            c += 1
    ans = min(ans, A * i + B * c)

print(ans)
