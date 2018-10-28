// Project Euler Question #10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function isPrime(x){
    rootX = parseInt(Math.sqrt(x));
    if (x%2 == 0){return false;}
    for (let i = 3 ; i<rootX+1 ; i+=2){
        if (x%i == 0){return false;}
    }
    return true;
}

function sumPrimes(max){
    let sum = 2;
    for (let i = 3 ; i<max ; i+=2){
        if (isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

console.time("runtime");
console.log(sumPrimes(2e6));
console.timeEnd("runtime");