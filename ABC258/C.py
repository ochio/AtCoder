N, Q = map(int, input().split())
S = input()

i = 0
for _ in range(Q):
    q, x = map(int, input().split())

    if q == 1:
        i -= x
        i %= N
    else:
        print(S[(i + x - 1) % N])
