N = list(map(int, input().split()))

ans = 0

for i, n in enumerate(N):
    if n == 1:
        ans += 2**i

print(ans)
