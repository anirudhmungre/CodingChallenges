// Project Euler Question 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Largest product of two 3 digit nums is 6 digits
function isPalindrome(mul){
    let check = mul.toString();
    let temp = check.split("").reverse().join("")
    if (check == temp){
        return true;
    } 
    else{return false;}
}

function iterate(){
    let largest = -1;
    for (let i = 999 ; i > 100 ; i--){
        for (let j = i ; j > 100 ; j--){
            // console.log(i + "   " + j);
            // console.log(i*j);
            if ((i*j)>largest && isPalindrome(i*j)){
                largest = i*j;
            }
        }
    }    
    return largest;
}
console.log(iterate());