let string = "hello";

function startsWith(str, start){

    if(start.length > str.length) return false

    for(let i= 0; i < start.length; i++){
        
        if(str[i] != start[i]){
            return false;
        }
        
    }
    return true;
}

console.log(startsWith(string, "he"))  