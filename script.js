//trapesium

class Trapesium {
  constructor(atas, bawah, tinggi, sisiKiri, sisiKanan) {
    this.atas = atas;
    this.bawah = bawah;
    this.tinggi = tinggi;
    this.sisiKiri = sisiKiri;
    this.sisiKanan = sisiKanan;
  }

  kelilingTrapesium() {
    return this.atas + this.bawah + this.sisiKiri + this.sisiKanan;
  }

  luasTrapesium() {
    return ((this.atas + this.bawah) * this.tinggi) / 2;
  }
}

const trapesium = new Trapesium(6, 8, 5, 4, 4);
console.log('keliling Trapesium:', trapesium.kelilingTrapesium());
console.log('luas Trapesium:', trapesium.luasTrapesium());
