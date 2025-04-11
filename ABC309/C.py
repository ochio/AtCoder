from collections import defaultdict

N, K = map(int, input().split())

A = [list(map(int, input().split())) for _ in range(N)]
B = defaultdict(int)
num = set()

total = 0
for i in range(N):
    total += A[i][1]
    B[A[i][0]] += A[i][1]
    num.add(A[i][0])

if total <= K:
    print(1)
    exit()


for day in sorted(list(num)):
    total -= B[day]
    if total <= K:
        print(day + 1)
        exit()
