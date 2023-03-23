N, K = map(int, input().split())
nums = list(map(int, input().split()))

t = [[(10**9) + 1] * (N // K + 1) for _ in range(K)]

j = 0
for i in range(N):
    t[i % K][j] = nums[i]
    if i != 0 and i % K == K - 1:
        j += 1

for i in range(len(t)):
    t[i].sort()

ans = True
b = 0
for i in range(len(t[0])):
    for j in range(K):
        if t[j][i] == 1000000001:
            break
        if i == 0 and j == 0:
            b = t[j][i]
        else:
            if b > t[j][i]:
                ans = False
                break
            b = t[j][i]


print("Yes" if ans else "No")
