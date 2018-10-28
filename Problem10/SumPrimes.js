// Project Euler Question #10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function isPrime(){
    
}

function sumPrimes(max){
    for (let i = 0 ; i<max ; i+=2){
        if (isPrime()){sum += i;}
    }
    return sum;
}

console.time("runtime");
console.log(sumPrimes(2e6));
console.timeEnd("runtime");