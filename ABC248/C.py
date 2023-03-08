N, M, K = list(map(int, input().split()))

dp = [[0] * K for _ in range(N + 1)]

for i in range(M):
    dp[0][i] = 1

for i in range(N):
    for j in range(K):
        for k in range(1, M + 1):
            if j + k <= K - 1:
                dp[i + 1][j + k] += dp[i][j]
                dp[i + 1][j + k] %= 998244353

a = 0
for i in range(K):
    a += dp[N - 1][i]
    a %= 998244353

print(a)
