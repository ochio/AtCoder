H, W = map(int, input().split())

m = []

for _ in range(H):
    m.append(list(map(int, input().split())))


def dfs(i, j, s):
    if i < 0 or j < 0 or H <= i or W <= j:
        return 0

    if m[i][j] in s:
        return 0
    if i == H - 1 and j == W - 1:
        return 1

    s.add(m[i][j])
    count = dfs(i + 1, j, s) + dfs(i, j + 1, s)
    s.remove(m[i][j])

    return count


count = dfs(0, 0, set())
print(count)
