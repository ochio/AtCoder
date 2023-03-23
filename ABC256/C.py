h1, h2, h3, w1, w2, w3 = map(int, input().split())

count = 0
for a in range(1, 29):
    for b in range(1, 29):
        for c in range(1, 29):
            for d in range(1, 29):
                x = h1 - a - b
                y = h2 - c - d
                v = w1 - a - c
                w = w2 - b - d

                if x <= 0 or y <= 0 or v <= 0 or w <= 0:
                    continue

                if w3 - x - y == h3 - v - w and h3 - v - w > 0:
                    count += 1

print(count)
