function charCount (str) {
    //make object to return at end
    var result = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        // If the char is a number/letter AND is a key in object, 
        // Add one to count
        if(result[char] > 0){
            result[char]++;
        }else{
            // If the char is a number/letter AND not in object, 
            // Add it to the object and set value
            result[char] = 1;
        }
    }
    //If character is something else [space, period, etc]. don't do anything
    //return an object at end
    return result;
}

console.log(charCount("Hello"));