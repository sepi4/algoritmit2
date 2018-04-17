function getReunatValit(h) {
  let reunatValit = [];
  for (let i = 0; i < h; i++) {
    let reuna;
    let vali;
    if (i === 0) {
      reuna = 1;
      vali = 3;
      reunatValit.push([reuna, vali]);
    }
    else {
      reuna = reunatValit[i - 1][0] * 2 + 1;
      vali = reuna * 2 + 1;
      reunatValit.push([reuna, vali]);
    }
  }
  reunatValit = reunatValit.reverse();
  return reunatValit;
}

function getRivi(rv, kerros, t, merkki) {
  let maara = 0;
  let rivi = "";
  for (let i = 0; i < rv[kerros][0]; i++) // reuna
    rivi += " ";
  
  for (let j = 0; j < Math.pow(2, kerros); j++) {
    let index = Math.pow(2, kerros) + j;
    if (index > t.length - 1)
      break;

    if (merkki === "|") 
      rivi += "|";
    else if (merkki === "_")
      rivi += " ";
    else
      rivi += t[index];

    maara++;
    if (maara >= Math.pow(2, kerros))  // rivin viimeinen merkki
      return rivi;

    for (let i = 0; i < rv[kerros][1]; i++) // väli
      if (j % 2 === 0 && merkki === "_")
        if (i === Math.floor((rv[kerros][1] - 1)/2)) {// keskella "|"
          rivi += "|";
        }
        else  // reunoilla "_"
          rivi += "_";
      else 
        rivi += " ";
  }
  return rivi;
}

function tulostaKeko(t) {
  let h = 0;
  h = Math.floor(Math.log2(t.length - 1) + 1);
  let rv = getReunatValit(h);
  
  let str = "";
  for (let i = 0; i < rv.length; i++) {
    if (i > 0) { // ei jos ensimmäinen rivi
      str += getRivi(rv, i, t, "_") + "\n";
      str += getRivi(rv, i, t, "|") + "\n";
    }
    str += getRivi(rv, i, t) + "\n";
  }
  console.log(str);
}

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function lisaaKekoon(a, alkio) {
  // a[0]:ssa on kekon koko
  if (a[0] >= a.length - 1)
    a.push(); // kasvatetaan taulukkoa
  a[0]++;
  let i = a[0];
  while (i > 1 && a[Math.floor(i/2)] > alkio) {
    a[i] = a[Math.floor(i/2)];
    i = Math.floor(i/2);
  }
  a[i] = alkio;
}

function korjaaKeko(a, i) {
  if (2 * i > a[0])
    return; // i:llä ei enää lapsia
  let j = 2 * i;
  let alkio = a[i];
  // siirto alaspain
  while (j <= a[0]) {
    if (j < a[0] && a[j] > a[j + 1])
      j = j + 1;
    if (alkio <= a[j])
      break;
    a[Math.floor(j/2)] = a[j];
    j = 2 * j;
  }
  a[Math.floor(j/2)] = alkio;
}

function poistaPienin(a) {
  if (a[0] == 0)
    return; // ei alkiota
  let alkio = a[1]; 
  a[1] = a[a[0]];
  a[0]--;
  korjaaKeko(a,1);
  return alkio;
}

function teeKeko(a) {
  for (let i = Math.floor(a[0] / 2); i > 0; i--) {
    korjaaKeko(a, i);
  }
}

function kekolajittelu(a) {
  a[0] = a.length - 1;
  teeKeko(a);
  for (let i = a.length - 1; i > 1; i--) {
    let temp = a[1];
    a[1] = a[i];
    a[i] = temp;
    a[0]--;
    korjaaKeko(a, 1);
  }
}

function main() {
  let t = [];
  for (let i = 0; i < 29; i++)
    t.push(randomInt(0, 10));
  t[0] = t.length - 1;


  console.log("Keko ennen lajittelua:")
  tulostaKeko(t);
  // console.log("Lisäys:")
  // lisaaKekoon(t, 0);
  // tulostaKeko(t);
  // console.log("Keko jälkeen lajittelun:")
  // kekolajittelu(t);
  // tulostaKeko(t);

  // let resultArr = [];
  // for (let i = 1; i < t.length; i++)
  //   resultArr.push(t[i]);

  // let resultStr = resultArr.join(", ");
  // console.log("Lajiteltu taukukko:");
  // console.log(resultStr);

}

main();