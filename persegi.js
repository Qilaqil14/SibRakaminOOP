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