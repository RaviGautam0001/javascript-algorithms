function collectOddsvalues (arr) {
    let result = [];
      
      function helper (helperInput) {
           if(helperInput.length === 0) return;

           if(helperInput[0] % 2 !== 0){
              result.push(helperInput[0]); 
           }
           helper(helperInput.slice(1));
      }
      helper(arr);
      return result;
}

function collectOddsvalues1 (arr) {
    let result = [];
    for(var i = 0; i < arr.length; i++){
        if( arr[i] % 2 !== 0){
            result.push(arr[i]);
        }
    }
    return result;
}

collectOddsvalues([1,2,3,4,5,6,7,8,9]);