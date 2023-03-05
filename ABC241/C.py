N = int(input())

ans = False
t = []
for i in range(N):
    s = input()
    t.append(s)


for i in range(N):
    for j in range(N):
        if j + 5 < N:
          c = 0
          for k in range(6):
              if t[i][j+k] == '#':
                 c += 1
          if c >= 4:
              ans = True
        if i + 5 < N:
          c = 0
          for k in range(6):
              if t[i+k][j] == '#':
                 c += 1
          if c >= 4:
              ans = True
        if i + 5 < N and j + 5 < N:
          c = 0
          for k in range(6):
              if t[i+k][j+k] == '#':
                 c += 1
          if c >= 4:
              ans = True
        if i + 5 < N and 0 <= j - 5 :
          c = 0
          for k in range(6):
              if t[i+k][j-k] == '#':
                 c += 1
          if c >= 4:
              ans = True

print('Yes' if ans else 'No')