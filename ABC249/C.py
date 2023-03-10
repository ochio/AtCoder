N, K = map(int, input().split())

s = []

for i in range(N):
    s.append(input())

m = 0
for i in range(1 << N):
    alp = [0] * 26
    for j in range(N):
        if (i >> j) & 1:
            for k in s[j]:
                alp[ord(k) - 97] += 1

    m = max(alp.count(K), m)

print(m)
