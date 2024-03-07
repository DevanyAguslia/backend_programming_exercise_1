function prima(angka) {
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false;
        }
    }
    return angka > 1;
}

function bilanganPrima(limit) {
    const bilanganPrimaList = [];

    for (let i = 2; i <= limit; i++) {
        if (prima(i)) {
            bilanganPrimaList.push(i);
        }
    }

    return bilanganPrimaList;
}

const limit = 1000;
const nomorBilanganPrima = bilanganPrima(limit);

console.log(`menampilkan semua bilangan prima dari angka 1 hingga 1,000`);
console.log(nomorBilanganPrima);
