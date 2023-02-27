s = input()

alp = [chr(i) for i in range(65, 91)]

t = 0

for i in range(len(s)):
    t += 26 ** (len(s) - i - 1) * (alp.index(s[i]) + 1)

print(t)
