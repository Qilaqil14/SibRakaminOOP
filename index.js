class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }
  hitungLuas() {
    return this.sisi * this.sisi;
  }
  hitungKeliling() {
    return 4 * this.sisi;
  }
}
const persegi = new Persegi(6);

console.log(`Luas Persegi ${persegi.hitungLuas()}`);
console.log(`Keliling Persegi ${persegi.hitungKeliling()}`);


class Segitiga {
  constructor(alas, tinggi){
      this.alas = alas;
      this.tinggi = tinggi;
  }

  hitungLuas(){
      return (this.alas * this.tinggi)/2;
  }

  hitungKeliling(sisiKiri, sisiKanan){
      return this.alas + sisiKiri + sisiKanan;
  }
}

const segitigaA = new Segitiga(10, 5);
const segitigaB = new Segitiga(15, 7);
const segitigaC = new Segitiga(16, 10);

console.log(`Luas Segitiga : ${segitigaA.hitungLuas()}`);
console.log(`Luas Segitiga : ${segitigaB.hitungLuas()}`);
console.log(`Luas Segitiga : ${segitigaC.hitungLuas()}`);

console.log(`Keliling Segitiga : ${segitigaA.hitungKeliling(10, 10)}`);
console.log(`Keliling Segitiga : ${segitigaA.hitungKeliling(20, 20)}`);
console.log(`Keliling Segitiga : ${segitigaA.hitungKeliling(30, 20)}`);


class Lingkaran {
  constructor(jariJari) {
    this.jariJari = jariJari;
  }

  hitungKeliling() {
    const keliling = 2 * Math.PI * this.jariJari; //Rumus keliling lingkaran = 2 x Phi x r
    return keliling;
  }

  hitungLuas() {
    const luas = Math.PI * Math.pow(this.jariJari, 2); //Rumus luas lingkaran = phi x r2
    return luas;
  }
}

// Contoh penggunaan
const jariJariLingkaran = 5;
const lingkaran = new Lingkaran(jariJariLingkaran);

const keliling = lingkaran.hitungKeliling();
const luas = lingkaran.hitungLuas();

console.log(
  `Keliling lingkaran dengan jari-jari ${jariJariLingkaran} adalah ${keliling.toFixed(
    2
  )}`
);
console.log(
  `Luas lingkaran dengan jari-jari ${jariJariLingkaran} adalah ${luas.toFixed(
    2
  )}`
);