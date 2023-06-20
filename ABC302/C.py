import itertools

N, M = map(int, input().split())
S = [input() for _ in range(N)]


def cmp(str1, str2):
    if len(str1) != len(str2):
        return
    c = 0
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            c += 1
    return c


ans = False
for pairs in itertools.permutations(S):
    f = True
    for i in range(1, N):
        if cmp(pairs[i - 1], pairs[i]) != 1:
            f = False
    if not f:
        continue
    else:
        ans = True

print("Yes" if ans else "No")
