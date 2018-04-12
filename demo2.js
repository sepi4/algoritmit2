class Hajauttaja {
  constructor(size) {
    this.m = size;
    this.t = new Array(this.m);
    // 0 = vappa
    for (let i = 0; i < this.t.length; i++)
      this.t[i] = 0;
  }

  // käytetään lineaarista etsintää
  h(k, i) {
    return (k % this.m + i) % this.m;
  }

  lisaa(k, v) {
    for (let i = 0; i < this.m; i++) {
      const j = this.h(k, i);
      // 0 = vappa
      // -1 = poistettu
      if (this.t[j] === 0 || this.t[j] === -1) {
        this.t[j] = {"avain": k, "arvo":v};
        return true;
      }
    }
    return false;
  }

  etsi(k) {
    for (let i = 0; i < this.m; i++) {
      const j = this.h(k, i);
      // 0 = vappa
      // -1 = poistettu
      if (this.t[j] === 0)
        return -1;
      else if ( this.t[j] != -1 && this.t[j].avain === k)
        return j; // palauttaa indexin
    }
    return -1;
  }

  poista(k) {
    const j = this.etsi(k);
    if (j < 0) // ei löytynyt
      return false;
    else {
      const temp = this.t[j];
      this.t[j] = -1;
      return temp; 
    }
  }
}

let haj = new Hajauttaja(5);

console.log(haj.t);
haj.lisaa(666, 11);
haj.lisaa(0, 55);
haj.lisaa(12345, 99);
console.log(haj.t);

console.log(haj.etsi(666));
console.log(haj.etsi(6));

console.log(haj.poista(666))
console.log(haj.t);

console.log(haj.poista(12345))
console.log(haj.poista(12345))
console.log(haj.t);