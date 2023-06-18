N,M,H,K = map(int, input().split())
S = input()

d = {}
for i in range(M):
	x, y = map(int, input().split())
	k = str(x) + "," + str(y)
	d[k] = True

x,y = 0,0
ans = "Yes"
for i in range(N):
	if S[i] == "R":
		x +=1
	elif S[i] == "L":
		x -=1
	elif S[i] == "U":
		y += 1
	else:
		y -= 1
	
	H -= 1
	k = str(x) + "," + str(y)

	if H < 0:
		ans = "No"
	if H < K and k in d and d[k]:
		H = K
		d[k] = False

print(ans)

