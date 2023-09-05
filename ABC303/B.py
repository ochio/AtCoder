N, M = map(int, input().split())

t = [[True if i == j else False for i in range(N)] for j in range(N)]

for _ in range(M):
    l = list(map(int, input().split()))
    for i in range(N):
        if i > 0:
            p = l[i - 1] - 1
            c = l[i] - 1
            t[c][p] = True
            t[p][c] = True

count = 0
for i in range(len(t)):
    for j in range(len(t[0])):
        if not t[i][j]:
            count += 1

print(count // 2)
