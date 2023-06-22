N = int(input())
S = list(input())

R = []
G = []
B = []

for i in range(N):
    if S[i] == "R":
        R.append(i)
    elif S[i] == "G":
        G.append(i)
    else:
        B.append(i)

cnt = 0

for i in range(N):
    for j in range(i + 1, N):
        k = j + j - i
        if k < N and S[i] != S[j] and S[j] != S[k] and S[i] != S[k]:
            cnt += 1


print(len(R) * len(G) * len(B) - cnt)
