X, A, D, N = map(int, input().split())

right = N - 1
left = 0

r_v = A + (N - 1) * D
l_v = A

a = min(abs(X - r_v), abs(X - l_v))

if r_v < l_v:
    X *= -1
    D *= -1
    A *= -1

while left <= right:
    middle = (left + right) // 2
    m_v = A + middle * D

    a = min(a, abs(X - m_v))

    if X == m_v:
        break
    elif X < m_v:
        right = middle - 1
    else:
        left = middle + 1

print(a)
