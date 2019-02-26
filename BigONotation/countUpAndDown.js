function countUpAndDown(n){
    console.log('Going Up')
    for(i=0; i < n; i++){
        console.log(i);
    }
    console.log('Break, going down');
    for(let j = n-1; j >=0 ; j--){
        console.log(j);
    }
    console.log('Back down');
}
console.log(countUpAndDown(10));