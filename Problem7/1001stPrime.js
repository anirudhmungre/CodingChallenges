// Project Euler Question 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function isPrime(x){
    rootX = parseInt(Math.sqrt(x));
    if (x%2 == 0){return false;}
    for (let i = 2 ; i<rootX+1 ; i++){
        if (x%i == 0){return false;}
    }
    return true;
}
function numPrime(pNum){
    let pFound = 1;
    let prime = -1;
    // Start at 3 with 2 found because we can iterate by 2 and 2 is lowest prime num
    for (let i = 3 ; pFound < pNum ; i++){
        if (isPrime(i)){
            pFound++;
            console.log(i + "   " + pFound+"/"+pNum);
            prime = i;
        }
    }
    return prime;
}
console.log(numPrime(10001));