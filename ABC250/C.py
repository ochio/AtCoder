N, Q = map(int, input().split())

nums = [i + 1 for i in range(N)]

x = {}
a = {}

for i in range(N):
    x[i + 1] = i + 1
    a[i + 1] = i + 1


for i in range(Q):
    n = int(input())
    tmpx = x[n]
    p1 = x[n]
    idx = a[p1 + 1] if p1 + 1 <= N else a[p1 - 1]
    p2 = x[idx]

    tmp = a[p1]
    a[p1] = a[p2]
    a[p2] = tmp

    x[n] = x[idx]
    x[idx] = tmpx

r = []
for v in a.values():
    r.append(str(v))

print(" ".join(r))
