R = {}
L = {}
N = int(input())

a = []
for i in range(N):
    t = list(map(int, input().split()))
    a.append(t)

S = input()

for i in range(len(S)):
    d = S[i]
    k = a[i][1]
    if d == "R":
        if k in R:
            R[k] = min(R[k], a[i][0])
        else:
            R[k] = a[i][0]

    else:
        if k in L:
            L[k] = max(L[k], a[i][0])
        else:
            L[k] = a[i][0]


ans = False
for k in R.keys():
    if k in L and R[k] < L[k]:
        ans = True

print("Yes" if ans else "No")
