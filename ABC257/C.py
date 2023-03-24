from collections import defaultdict

N = int(input())
S = input()
W = list(map(int, input().split()))

a = defaultdict(int)
c = defaultdict(int)
count = 0

for i in range(N):
    if S[i] == "1":
        a[W[i]] += 1
        count += 1
    else:
        c[W[i]] += 1

W.sort()

m = count
for i in range(N):
    if i > 0 and W[i - 1] == W[i]:
        continue

    if W[i] in c:
        count += c[W[i]]

    if W[i] in a:
        count -= a[W[i]]

    m = max(m, count)

print(m)
