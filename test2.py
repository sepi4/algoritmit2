import math
import array

def haeSuurin(t, n):
  if n == 1:
    return t[n - 1]
  else:
    last = t[n-1]
    x = haeSuurin(t, n-1)
    if last > x:
      return last
    else:
      return x

def haeSuurin2(t, s, e):
  if s < e:
    half = math.floor((s+e)/2)
    a = haeSuurin2(t, s,  half)
    b = haeSuurin2(t, half+1, e)
    if a > b:
      return a
    else:
      return b
  else:
    return t[s]


arr = [9,1,2,5,7,3,2,1,1]
n = len(arr)
result = haeSuurin(arr, n)
print(result)
result = haeSuurin2(arr, 0, n-1)
print(result)