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