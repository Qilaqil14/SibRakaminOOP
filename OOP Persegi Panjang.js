class PersegiPanjang {
    constructor(panjang, lebar) {
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    hitungLuas() {
      return this.panjang * this.lebar;
    }
  
    hitungKeliling() {
      return 2 * (this.panjang + this.lebar);
    }
  }
  

const persegiPanjang = new PersegiPanjang(4, 5);

const luas = persegiPanjang.hitungLuas();
const keliling = persegiPanjang.hitungKeliling();

console.log("Luas:", luas); 
console.log("Keliling:", keliling);
