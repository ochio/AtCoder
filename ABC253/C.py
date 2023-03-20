import heapq
from collections import defaultdict

Q = int(input())

ma = []
mi = []
heapq.heapify(ma)
heapq.heapify(mi)
d = defaultdict(int)

for _ in range(Q):
    q = list(map(int, input().split()))

    if q[0] == 1:
        x = q[1]
        heapq.heappush(ma, x * -1)
        heapq.heappush(mi, x)
        d[x] += 1
    elif q[0] == 2:
        x, c = q[1], q[2]
        d[x] = d[x] - min(c, d[x])
    else:
        while d[ma[0] * -1] == 0:
            heapq.heappop(ma)
        while d[mi[0]] == 0:
            heapq.heappop(mi)
        print(ma[0] * -1 - mi[0])
