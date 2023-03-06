N = int(input())

dp = [[0] * N for _ in range(9)]

for i in range(9):
    dp[i][0] = 1


for i in range(1, N):
    for j in range(9):
        if j - 1 >= 0:
            dp[j][i] += dp[j - 1][i - 1]
        if j + 1 < 9:
            dp[j][i] += dp[j + 1][i - 1]
        dp[j][i] += dp[j][i - 1]
        dp[j][i] %= 998244353

s = 0

for i in range(9):
    s += dp[i][N - 1]
    s %= 998244353

print(s)
