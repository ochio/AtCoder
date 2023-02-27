import itertools

n, m = map(int, input().split())

p1 = [[False] * n for _ in range(n)]
p2 = [[False] * n for _ in range(n)]

for i in range(m):
    a, b = map(int, input().split())
    a -= 1
    b -= 1
    p1[a][b] = p1[b][a] = True

for i in range(m):
    c, d = map(int, input().split())
    c -= 1
    d -= 1
    p2[c][d] = p2[d][c] = True


nums = [i for i in range(1, n + 1)]
perms = itertools.permutations(nums)

ans = ""
for perm in perms:
    f = True
    for i in range(n):
        for j in range(i + 1, n):
            if p1[i][j] != p2[perm[i] - 1][perm[j] - 1]:
                f = False
    if f:
        ans = "Yes"

print("Yes" if ans != "" else "No")
