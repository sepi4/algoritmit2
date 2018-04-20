# pvJoukko = [
#   "kiuru",
#   "lokki",
#   "rastas",
#   "sorsa",
#   "varis",
#   "hevonen",
#   "sika",
# ]

class Olio:
  def __init__(self, arvo):
    self.arvo = arvo
    self.joukko = -1

pvJoukko = [
  Olio("kiuru"),
  Olio("lokki"),
  Olio("rastas"),
  Olio("sorsa"),
  Olio("varis"),
  Olio("hevonen"),
  Olio("sika")
]

def union(a, b):
  # a ja b oltava juurisolmuja
  k = pvJoukko[a].joukko + pvJoukko[b].joukko
  if pvJoukko[a].joukko <= pvJoukko[b].joukko: 
    pvJoukko[a].joukko = k
    pvJoukko[b].joukko = a
  else:
    pvJoukko[b].joukko = k
    pvJoukko[a].joukko = b

# palauttaa isasolmun indexin ja tiivistaa polkua
def find(x):
  j = x
  # juurisolmun etsinta
  while pvJoukko[j].joukko > 0:
    j = pvJoukko[j].joukko
  # polun tiivistys
  while pvJoukko[x].joukko > 0:
    k = x
    x = pvJoukko[x].joukko
    pvJoukko[k].joukko = j
  return j

def nayta_sisalto(t):
  for x in t:
    print('{arvo:{w}}: {joukko:{num_w}}'.format(arvo=x.arvo, w=9, joukko=x.joukko, num_w=3 ), end="\n")



print("----Alussa----")
nayta_sisalto(pvJoukko)
print()

union(find(1),find(2))
union(find(3),find(4))
union(find(2),find(3))
union(find(4),find(5))
union(find(0),find(1))

print("----Lopussa----")
nayta_sisalto(pvJoukko)
