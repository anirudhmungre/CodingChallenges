// Project Euler Question #9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function checkAdd(a, b, c){
    if (a+b+c == 1000){return true;}
    return false;
}

function pythagTriplet(){
    let b= 0, c = 0;
    for (let a = 1 ; a < 1000 ; a++){
        for (let b = a+1 ; b < 1000-a-c ; b++){
            c = Math.sqrt(a*a + b*b);
            if (Number.isInteger(c) && checkAdd(a, b, c)){
                return a*b*c;
            }
        }
    }
}

console.time("runtime");
console.log(pythagTriplet());
console.timeEnd("runtime");