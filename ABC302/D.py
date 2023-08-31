N, M, D = list(map(int, input().split()))
A = sorted(list(map(int, input().split())), reverse=True)
B = sorted(list(map(int, input().split())), reverse=True)

i = 0
j = 0
a = -1

while i < N and j < M:
    if i == N or j == M:
        break
    if abs(A[i] - B[j]) <= D:
        a = A[i] + B[j]
        break

    if A[i] > B[j]:
        i += 1
    else:
        j += 1

print(a)
