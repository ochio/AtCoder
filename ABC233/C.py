N, X = map(int, input().split())

t = []

for i in range(N):
    ipt = input().split()
    L, a = ipt[0], list(map(int, ipt[1:]))
    t.append(a)


c = 0


def rec(i, r):
    global c
    if i >= N:
        return
    else:
        for j in range(len(t[i])):
            if i == N - 1 and r / t[i][j] == 1:
                c += 1
                continue
            if r % t[i][j] == 0:
                rec(i + 1, r / t[i][j])


rec(0, X)
print(c)