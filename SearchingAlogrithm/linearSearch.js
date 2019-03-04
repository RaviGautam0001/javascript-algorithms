var usernames = ["tommy", "tanya", "neha", "kavi"];

function linearSearch (arr, toFind) {
     for(var i = 0; i < arr.length; i++){
         if(arr[i] === toFind){
             return i;
         }
     }  
     return -1;
}

linearSearch(usernames, "tanya");