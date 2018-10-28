// Project Euler Question 6
// The sum of the squares of the first ten natural numbers is,
//     1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//     (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function diff(){
    let sqSum = 1; 
    let sumSq = 1;
    for (let i = 2 ; i <= 100 ; i++){
        sqSum += i;
        sumSq += (i*i);
    }
    return sqSum**2-sumSq;
}
console.log(diff());