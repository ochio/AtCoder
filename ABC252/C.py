N = int(input())

s = []

for i in range(N):
    s.append(list(map(int, input())))

m = 10**5
for i in range(10):
    c = 0
    for k in range(10):
        f = False
        t = 0
        for j in range(N):
            if s[j][k] == i:
                if f:
                    t += 10
                else:
                    t = k
                    f = True
        c = max(c, t)
    m = min(c, m)

print(m)
