N = int(input())
A = list(map(int, input().split()))

G = [[] for _ in range(N)]

for i, v in enumerate(A):
    G[i].append(v - 1)


def cnt(start):
    s = set()
    index = start
    v = []
    c = 0

    while True:
        s.add(index)
        v.append(index)
        index = G[index][0]
        c += 1

        if index in s and index == start:
            return (c, v)

        if index in s:
            return cnt(index)


for i in range(N):
    c, s = cnt(i)

    if c != -1:
        print(c)
        print(*list(map(lambda v: v + 1, s)))
        exit()
