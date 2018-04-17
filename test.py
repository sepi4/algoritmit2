import time
grid = []
w = 0
answers = 0

def getWidth():
  x = input("Syötä laudan leveys: ")
  if isInt(x) and int(x) > 0:
    return int(x)
  else:
    print("Oltava positiivinen kokonaisluku.")
    getWidth()


def isInt(strNum):
  try:
    int(strNum)
    return True
  except ValueError:
    return False

  
def check(qY, qX):
  # up left
  for y, x in zip(range(qY-1, -1, -1), range(qX-1, -1, -1)):  
    if grid[y][x] == "Q":
      return False

  # up right
  for y, x in zip(range(qY-1, -1, -1), range(qX+1, w, +1)):  
    if grid[y][x] == "Q":
      return False
      
  # down left
  for y, x in zip(range(qY+1, w, +1), range(qX-1, -1, -1)):  
    if grid[y][x] == "Q":
      return False

  # down right
  for y, x in zip(range(qY+1, w, +1), range(qX+1, w, +1)):  
    if grid[y][x] == "Q":
      return False

  # up down
  for y in range(0, w):
    if y == qY:
      continue
    if grid[y][qX] == "Q":
      return False

  # left right
  for x in range(0, w):
    if x == qX:
      continue
    if grid[qY][x] == "Q":
      return False

  return True


def main():
  global w
  global answers
  w = getWidth()
  print('Laudan leveys on ' + str(w))
  for x in range(0, w):
    grid.append([" "]*w)

  grid[0][0] = "Q"
  
  aloitusaika = time.time()
  nFor(0, w, w)
  lopetusaika = time.time()
  print(answers)
  print(lopetusaika - aloitusaika)
  
def nFor(y, depth, size):
  global answers
  if depth <= 0:
    return
  for i in range(0, size):
    if (check(y, i)):
      grid[y][i] = "Q"
      if depth == 1:
        # answers.append(1)
        answers = answers + 1
        
      nFor(y + 1, depth - 1, size)
    grid[y][i] = ""


main()