def lause_toisinpain(lause):
  sana = ""
  kaannetty_lause = ""
  for x in lause:
    if x != " ":
      sana += x
    elif x == " " and len(sana) < 1:
      kaannetty_lause += " "
    elif len(sana) > 0 :
      kaannetty_lause = sana + " " + kaannetty_lause
      sana = ""

  if len(sana) > 0:
    kaannetty_lause = sana + " " + kaannetty_lause
  return kaannetty_lause
lause = " algoritmien opiskelu   on kivaa"
print(lause_toisinpain(lause))
