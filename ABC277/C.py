from collections import defaultdict

N = int(input())

d = defaultdict(list)
visited = {}

for _ in range(N):
    A, B = map(int, input().split())
    d[A].append(B)
    d[B].append(A)
    visited[A] = False
    visited[B] = False

if len(d[1]) == 0:
    ans = 1
else:
    visited[1] = True
    stack = d[1]
    ans = 0

    while stack:
        s = stack.pop()
        if visited[s]:
            continue
        ans = max(ans, s)
        visited[s] = True
        stack += d[s]

print(ans)
