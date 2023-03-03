N = input()
num = int(N)

c = 0

for i in range(len(N)):
    d = len(N) - i - 1
    t = num + 1 - 10**d
    num -= t

    c += t * (t + 1) // 2

print(c % 998244353)
