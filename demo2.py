class Hajauttaja:
  def __init__(self, size):
    self.m = size
    self.t = [0] * self.m
  
  def h(self, k, i):
    return (k % self.m + i) % self.m
  
  def lisaa(self, k, v):
    for i in range(0, self.m):
      j = self.h(k, i)
      # 0 = vapaa
      # -1 = poistettu
      if self.t[j] == 0 or self.t[j] == -1:
        self.t[j] = {"avain": k, "arvo":v} 
        return True
    return False
  
  def etsi(self, k):
    for i in range(0, self.m):
      j = self.h(k, i)
      if self.t[0] == 0:
        return -1
      elif (self.t[j] != -1 and 
        type(self.t[j]) is dict and self.t[j]["avain"] == k):
        return j
    return -1
  
  def poista(self, k):
    j = self.etsi(k)
    if j < 0: # ei löytynyt
      return False
    else:
      temp = self.t[j]
      self.t[j] = -1
      return temp



haj = Hajauttaja(5)
haj.lisaa(19, 2)
haj.lisaa(88, 3)
haj.lisaa(8, 4)
print(haj.t)

print(haj.etsi(88))
print(haj.etsi(0))

print(haj.poista(88))
print(haj.poista(123456))
print(haj.t)