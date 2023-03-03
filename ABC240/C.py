N, X = map(int, input().split())

memo = [[False for _ in range((10**4) + 1)] for _ in range(N + 1)]

steps = []

for i in range(N):
    step = list(map(int, input().split()))
    steps.append(step)


def rec(i, x):
    if x > X or i > N:
        return False
    if memo[i][x] == "1":
        return True
    elif memo[i][x] == "0":
        return False

    if i == N:
        return x == X
    else:
        r1 = rec(i + 1, x + steps[i][0])
        r2 = rec(i + 1, x + steps[i][1])
        memo[i + 1][x + steps[i][0]] = "1" if r1 else "0"
        memo[i + 1][x + steps[i][1]] = "1" if r2 else "0"
        return r1 or r2


rec(0, 0)
print("Yes" if memo[N][X] else "No")
