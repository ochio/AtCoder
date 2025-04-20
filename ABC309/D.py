from collections import deque

N1, N2, M = map(int, input().split())

A = [[] for _ in range(N1 + N2)]


def bfs(A, s):
    n = len(A)
    dist = [-1] * n
    dist[s] = 0
    Q = deque()
    Q.append(s)

    while Q:
        x = Q.popleft()
        for y in A[x]:
            if dist[y] == -1:
                dist[y] = dist[x] + 1
                Q.append(y)
    return max(dist)


for _ in range(M):
    a, b = map(int, input().split())
    a -= 1
    b -= 1
    A[a].append(b)
    A[b].append(a)

ans = bfs(A, 0) + bfs(A, N1 + N2 - 1) + 1

print(ans)
