N = int(input())
S = input()

A = []
T = ""

for i in range(N):
    if S[i] == "(":
        T += S[i]
        A.append(len(T) - 1)
    elif S[i] == ")":
        if A:
            T = T[: A.pop()]
        else:
            T += S[i]
    else:
        T += S[i]

print(T)
