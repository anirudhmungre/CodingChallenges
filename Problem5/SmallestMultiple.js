// Project Euler Question 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Only check 20 - 11 because all lower are multiples of already checked
function isMult(x){
    for (let i = 20 ; i > 10 ; i--){
        if (x%i!=0){return false;} 
    }
    return true;
}

//must be a multiple of all numbers from 1-20
function lowestMult(){
    let i = 20+2; 
    while (!isMult(i)){
        i+=2; // Go up by 2 because must be multiple of 2
    }
    return i;
}
console.log(lowestMult());