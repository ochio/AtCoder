from collections import deque

N, M = map(int, input().split())
cities = [[] for _ in range(N)]

for _ in range(M):
    A, B = map(int, input().split())
    cities[A - 1].append(B - 1)
    cities[B - 1].append(A - 1)


que = [0]
dist = [None] * N
cnt = [0] * N
dist[0] = 0
cnt[0] = 1

count = 0

for v in que:
    for vv in cities[v]:
        if dist[vv] is None:
            dist[vv] = dist[v] + 1
            que.append(vv)
            cnt[vv] = cnt[v]
        elif dist[vv] == dist[v] + 1:
            cnt[vv] += cnt[v]

print(cnt[-1] % (10**9 + 7))
