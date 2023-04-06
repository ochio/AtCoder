N, X, Y = map(int, input().split())

r = [0] * 10
b = [0] * 10


r[N - 1] = 1

for i in range(9, 0, -1):
    r[i - 1] += r[i]
    b[i] += r[i] * X
    r[i] = 0

    r[i - 1] += b[i]
    b[i - 1] += b[i] * Y

print(b[0])
