N, K = map(int, input().split())
P = list(map(int, input().split()))

ary = [False] * (N + 1)

for i in P[:K]:
    ary[i] = True

pointer = min(P[:K])

for i in range(K, N + 1):
    ary[P[i - 1]] = True
    if P[i - 1] != P[K - 1] and pointer < P[i - 1]:
        pointer += 1

    while not ary[pointer]:
        pointer += 1

    print(pointer)
