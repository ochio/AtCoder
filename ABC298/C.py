from collections import defaultdict
import bisect

N = int(input())
Q = int(input())

box = [[] for _ in range(N)] 
card = defaultdict(set)

for _ in range(Q):
    query = list(input().split())
    if query[0] == "1":
        q,i,j = query
        box[int(j)-1].append(int(i))
        card[int(i)-1].add(int(j))
    else:
        q,i, = query
        if q == "2":
            box[int(i)-1].sort()
            print(*box[int(i)-1])
        else:
            a = list(card[int(i)-1])
            a.sort()
            print(*a)
            
