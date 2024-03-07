//535230189 Devany Aguslia
//Buatlah program yang menampilkan semua bilangan prima dari angka 1 hingga 1,000

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function displayPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const limit = 1000;
const primeNumbers = displayPrimes(limit);

console.log(`All prime numbers from 1 to ${limit} are:`);
console.log(primeNumbers);

