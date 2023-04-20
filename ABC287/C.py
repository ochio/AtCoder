import queue
from collections import defaultdict

N, M = map(int, input().split())

d = defaultdict(list)

ans = True
for i in range(M):
    v1, v2 = map(int, input().split())

    if len(d[v1 - 1]) >= 2 or len(d[v2 - 1]) >= 2:
        ans = False
    else:
        d[v1 - 1].append(v2 - 1)
        d[v2 - 1].append(v1 - 1)

c1 = True
if M != N - 1:
    c1 = False

c2 = True
for key in d.keys():
    if len(d[key]) == 0 or len(d[key]) > 2:
        c2 = False
        break

visited = [False for _ in range(N)]
q = queue.Queue()
q.put(d[0])
visited[0] = True

c3 = True
while q.qsize():
    v = q.get()
    for t in v:
        if visited[t]:
            continue
        else:
            q.put(d[t])
            visited[t] = True

c3 = all(visited)

print("Yes" if c1 and c2 and c3 else "No")
