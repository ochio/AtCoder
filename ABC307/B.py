N = int(input())
S = [input() for _ in range(N)]

for i in range(N):
    for j in range(N):
        if i != j:
            T = S[i] + S[j]
            if T == T[::-1]:
                print("Yes")
                exit()

print("No")
