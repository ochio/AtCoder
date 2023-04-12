Ax, Ay = map(int, input().split())
Bx, By = map(int, input().split())
Cx, Cy = map(int, input().split())
Dx, Dy = map(int, input().split())

ans = False


def f0(x, y):
    return (Cx - Ax) * (y - Ay) - (Cy - Ay) * (x - Ax)


def f1(x, y):
    return (Dx - Bx) * (y - By) - (Dy - By) * (x - Bx)


def sgn(x):
    if x == 0:
        return 0
    return x // abs(x)


if sgn(f0(Bx, By)) != sgn(f0(Dx, Dy)) and sgn(f1(Ax, Ay)) != sgn(f1(Cx, Cy)):
    ans = True

print("Yes" if ans else "No")
