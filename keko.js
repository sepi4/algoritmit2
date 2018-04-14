function getReunatValit(h) {
  let reunatValit = [];
  for (let i = 0; i < h; i++) {
    let reuna;
    let vali;
    if (i === 0) {
      reuna = 0;
      vali = 1;
      reunatValit.push([reuna, vali]);
    }
    else {
      reuna = reunatValit[i - 1][0] * 2 + 2;
      vali = reuna * 2 + 3;
      reunatValit.push([reuna, vali]);
    }
  }
  reunatValit = reunatValit.reverse();
  return reunatValit;
}

function tulostaKeko(t) {
  let h = 0;
  h = Math.floor(Math.log2(t.length - 1) + 1);

  let rv = getReunatValit(h);

  let vanhaKerros = 0;
  let str = "";
  let kerros = 0;
  let lastIndex;
  for (let i = 1; i < t.length; i++) {
    kerros = Math.floor(Math.log2(i) + 1);
    if (kerros >= h) {
      lastIndex = i;
      break;
    }

    if (vanhaKerros < kerros) { // reunan tulostus
      str += "\n";
      for (let r = 0; r < rv[kerros - 1][0]; r++) {
        str += " ";
      }
      vanhaKerros = kerros;
    }
    str += t[i];
    for (let r = 0; r < rv[kerros - 1][1]; r++) {
      str += " ";
    }
  }

  str += "\n";
  str += " ";
  for (let i = lastIndex; i < t.length; i++) {
    str += t[i];
    if (i % 2 === 0)
      str += " ";
    else
      str += "     ";
  }
  console.log(str);
}

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function lisaaKekoon(a, alkio) {
  // a[0]:ssa on kekon koko
  if (a[0] >= a.length - 1)
    return false;
  a[0]++;
  let i = a[0];
  while (i > 1 && a[i/2] > alkio) {
    a[i] = a[i/2];
    i = i/2;
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


let t = [];
for (let i = 0; i < 10; i++) 
  t.push(randomInt(0,10));
t[0] = t.length - 1;

// teeKeko(t);
// tulostaKeko(t);

console.log("Keko ennen lajittelua:")
tulostaKeko(t);
kekolajittelu(t);
console.log("Keko jälkeen lajittelun:")
tulostaKeko(t);

let resultArr = [];
for (let i = 1; i < t.length; i++) 
  resultArr.push(t[i]);

let resultStr = resultArr.join(", ");
console.log("Lajiteltu taukukko:");
console.log(resultStr);


