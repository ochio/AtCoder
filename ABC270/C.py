from collections import defaultdict
import sys
sys.setrecursionlimit(10**6)

N, X, Y = list(map(int, input().split()))

d = defaultdict(list)

for _ in range(N-1):
    A, B = map(int, input().split())
    d[A].append(B)
    d[B].append(A)
    

visited = [False] * N
stack = []
f = True

def dfs(node):
    stack.append(node)
    visited[node-1]=True
    if node == Y:
        print(*stack)
        return
    for i in range(len(d[node])):
        if visited[d[node][i]-1]:
            continue
        dfs(d[node][i])
    stack.pop()

dfs(X)