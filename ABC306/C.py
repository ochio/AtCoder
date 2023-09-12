N = int(input())
A = list(map(int, input().split()))

t = [[] for _ in range(N)]

for i in range(1, N * 3 + 1):
    t[A[i - 1] - 1].append(i)

o = []
for i in range(N):
    idx = len(t[i]) // 2
    o.append((t[i][idx], i))

o.sort()

ans = []
for i in range(N):
    ans.append(str(o[i][1] + 1))

print(" ".join(ans))
