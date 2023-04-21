N, M = map(int, input().split())
A = list(map(int, input().split()))

t = [0 for _ in range(N)]
t[M - 1] = sum(A[:M])
i = M

while i < N:
    t[i] = t[i - 1] - A[i - M] + A[i]
    i += 1

for i in range(1, N):
    s = t[i - 1] + A[i]
    t.append(s)


a = 0
for i in range(M):
    a += (i + 1) * A[i]

m = a
pre = a
for i in range(M, N):
    b = pre - t[i - 1] + A[i] * M
    pre = b
    m = max(b, m)

print(m)
