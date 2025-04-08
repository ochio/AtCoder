from functools import cmp_to_key

N = int(input())

L = []
for i in range(N):
    a, b = map(int, input().split())
    L.append((a, b, i))


def compare(x, y):
    a1, b1, i1 = x
    a2, b2, i2 = y
    if a1 * (a2 + b2) > a2 * (a1 + b1):
        return -1
    elif a1 * (a2 + b2) == a2 * (a1 + b1):
        return 0
    else:
        return 1


L.sort(key=cmp_to_key(compare))

print(*[f"{obj[2] + 1}" for obj in L])
