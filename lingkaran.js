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
