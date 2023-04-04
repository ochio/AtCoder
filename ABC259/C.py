S = input()
T = input()

a = []
b = []

tmp = S[0]

for i in range(0, len(S) - 1):
    if S[i] != S[i + 1]:
        a.append(tmp)
        tmp = S[i + 1]
    else:
        tmp += S[i]
a.append(tmp)

tmp = T[0]
for i in range(0, len(T) - 1):
    if T[i] != T[i + 1]:
        b.append(tmp)
        tmp = T[i + 1]
    else:
        tmp += T[i]
b.append(tmp)


ans = True
if len(a) != len(b):
    ans = False
else:
    for i in range(len(b)):
        if a[i][0] != b[i][0]:
            ans = False
        elif len(b[i]) < len(a[i]):
            ans = False
        elif len(b[i]) >= 2 and len(a[i]) == 1:
            ans = False

print("Yes" if ans else "No")
