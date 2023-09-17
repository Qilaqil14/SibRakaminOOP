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
const segitigaB = new Segitiga(20, 7);

console.log(segitigaA.hitungLuas());
console.log(segitigaB.hitungLuas());

console.log(segitigaA.hitungKeliling(10, 10));
console.log(segitigaB.hitungKeliling(20, 20));