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
            if (isPalindrome(i*j) && (i*j)>largest){
                largest = i*j;
            }
        }
    }    
    return largest;
}
console.log(iterate());