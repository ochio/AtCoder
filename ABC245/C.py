N, K = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

dp = [[False] * 2 for _ in range(N)]

dp[0][0], dp[0][1] = True, True

for i in range(1, N):
    a1 = abs(A[i - 1] - A[i]) <= K and dp[i - 1][0]
    a2 = abs(B[i - 1] - A[i]) <= K and dp[i - 1][1]
    dp[i][0] = a1 or a2

    b1 = abs(A[i - 1] - B[i]) <= K and dp[i - 1][0]
    b2 = abs(B[i - 1] - B[i]) <= K and dp[i - 1][1]
    dp[i][1] = b1 or b2

ans = dp[N - 1][0] or dp[N - 1][1]
print("Yes" if ans else "No")
