H, W = map(int, input().split())

A = []

for _ in range(H):
    A.append(list(input()))

S = ["s", "n", "u", "k", "e"]
visited = [[False for _ in range(W)] for _ in range(H)]


def dfs():
    stack = [(0, 0, 0)]
    d = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    while stack:
        vx, vy, i = stack.pop()
        if vx == H - 1 and vy == W - 1:
            print("Yes")
            exit()
        visited[vx][vy] = True
        for dx, dy in d:
            nx, ny = vx + dx, vy + dy

            if 0 <= nx < H and 0 <= ny < W and A[nx][ny] == S[(i + 1) % 5] and not visited[nx][ny]:
                stack.append((nx, ny, (i + 1) % 5))

    print("No")


dfs()
