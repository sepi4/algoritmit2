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
  y = qY-1
  x = qX-1
  while y >= 0 and x >= 0:
    if grid[y][x] == "Q":
      return False
    y -= 1 
    x -= 1

  # for y, x in zip(range(qY-1, -1, -1), range(qX-1, -1, -1)):  
  #   if grid[y][x] == "Q":
  #     return False

  # up right
  y = qY-1
  x = qX+1
  while y >= 0 and x < w:
    if grid[y][x] == "Q":
      return False
    y -= 1 
    x += 1

  # for y, x in zip(range(qY-1, -1, -1), range(qX+1, w, +1)):  
  #   if grid[y][x] == "Q":
  #     return False
      
  # down left
  y = qY+1
  x = qX-1
  while y < w and x >= 0:
    if grid[y][x] == "Q":
      return False
    y += 1 
    x -= 1
  # for y, x in zip(range(qY+1, w, +1), range(qX-1, -1, -1)):  
  #   if grid[y][x] == "Q":
  #     return False

  # down right
  y = qY+1
  x = qX+1
  while y < w and x < w:
    if grid[y][x] == "Q":
      return False
    y += 1 
    x += 1
  # for y, x in zip(range(qY+1, w, +1), range(qX+1, w, +1)):  
  #   if grid[y][x] == "Q":
  #     return False

  # up down
  y = 0
  while y < w:
    if y == qY:
      y += 1 
      continue
    if grid[y][qX] == "Q":
      return False
    y += 1 
  # for y in range(0, w):
  #   if y == qY:
  #     continue
  #   if grid[y][qX] == "Q":
  #     return False

  # left right
  x = 0
  while x < w:
    if x == qY:
      x += 1 
      continue
    if grid[qY][x] == "Q":
      return False
    x += 1 
  # for x in range(0, w):
  #   if x == qX:
  #     continue
  #   if grid[qY][x] == "Q":
  #     return False

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
