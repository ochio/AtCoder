import itertools

t = []

for _ in range(9):
    t.append(list(input()))


ans = 0
for i1, j1, i2, j2 in itertools.product(range(9), repeat=4):
    if i2 > i1 and j2 >= j1 and t[i1][j1] == "#" and t[i2][j2] == "#":
        d1 = i2 - i1
        d2 = j2 - j1
        i3 = i2 + d2
        j3 = j2 - d1
        i4 = i3 - d1
        j4 = j3 - d2
        if (
            0 <= i3 < 9
            and 0 <= j3 < 9
            and 0 <= i4 < 9
            and 0 <= j4 < 9
            and t[i3][j3] == "#"
            and t[i4][j4] == "#"
        ):
            ans += 1

print(ans)
