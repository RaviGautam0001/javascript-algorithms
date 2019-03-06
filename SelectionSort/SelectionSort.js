function selectionSort (arr) {
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest){
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
        }
      }
    return arr;
 }
 
 function selectionSortES62015 (arr) {
     const swap = (arr, idx1, idx2) => 
     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
     for(var i = 0; i  < arr.length; i++) {
         let lowest = i;
         for(var j = i+1; j < arr.length; j++){
             if(arr[lowest] > arr[j]) {
                 lowest = j;
             }
         }
         if(i !== lowest) swap(arr, i, lowest);
     }
     return arr;
 }
 
 selectionSortES62015([5,3,4,2,1]);