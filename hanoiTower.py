siirtoja = 0
def print_move(fr, to):
  global siirtoja
  siirtoja += 1
  # print('move from ' + str(fr) + ' to ' + str(to))

def towers(n, fr, to, spare):
  if n == 1:
    print_move(fr, to)
  else:
    towers(n-1, fr, spare, to)
    towers(1, fr, to, spare)
    towers(n-1, spare, to, fr)

towers(4, "alku", "loppu", "apu")
print(siirtoja)