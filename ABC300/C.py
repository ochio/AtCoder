H, W = map(int, input().split())

grid = []
ans = [0] * min(H, W)

for _ in range(H):
    grid.append(list(input()))


def dfs(a, b):
    if a < 0 or H <= a or b < 0 or W <= b or grid[a][b] == ".":
        return 0

    diff = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
    grid[a][b] = "."
    count = 1
    for d in diff:
        next_a = a + d[0]
        next_b = b + d[1]
        count += dfs(next_a, next_b)

    return count


for i in range(H):
    for j in range(W):
        s = (dfs(i, j) - 1) // 4
        if s < 0:
            continue
        ans[s - 1] += 1

print(" ".join(map(str, ans)))
