function factorial (num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

function factorial1(num) {
    let total = 1;
    for(var i = num; i > 1; i-- ){
       total *= i;
    }
    return  total;
}

factorial(5);