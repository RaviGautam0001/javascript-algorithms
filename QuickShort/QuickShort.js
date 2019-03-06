function pivot (arr, start=0, end=arr.length - 1){
    
    //     function swap(array, i, j){
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp; 
    //     }
    
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
        };
    
        let pivot = arr[start];
        let swapIdx = start;
        for(var i = start + 1; i < arr.length; i++){
             if(pivot > arr[i]) { 
                swapIdx++;
                swap(arr, swapIdx, i);
             }
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    }
    
    function quickShort(arr, left = 0, right = arr.length - 1){
        if(left < right) {
            let pivotIndex = pivot(arr, left,right);
            //Left
            quickShort(arr, left, pivotIndex - 1);
            //Right
            quickShort(arr, pivotIndex + 1, right);
        } 
        return arr;
    }
    
    quickShort([4,6,9,1,2,5,3]);
    
    