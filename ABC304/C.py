import math
from collections import deque

N, D = map(int, input().split())
p = []


def inRange(a1, a2, b1, b2):
    d = math.sqrt((a1 - b1) ** 2 + (a2 - b2) ** 2)
    return d <= D


for _ in range(N):
    X, Y = map(int, input().split())
    p.append([X, Y])

visited = [False] * N

q = deque([0])

while q:
    index = q.popleft()
    currentX, currentY = p[index]
    for i in range(len(p)):
        if visited[i]:
            continue
        else:
            targetX, targetY = p[i]
            if inRange(currentX, currentY, targetX, targetY):
                visited[i] = True
                q.append(i)

for r in visited:
    if r:
        print("Yes")
    else:
        print("No")
