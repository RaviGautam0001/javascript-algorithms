function charFoorLoopD(str){
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
        //   if(obj[char] > 0){
        //       obj[char]++;
        //   }else{
        //       obj[char] = 1;
        //   }
        obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log(charFoorLoopD("Hello hi threre 1254"));