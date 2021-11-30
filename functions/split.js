const string = "bonjour__ceci__est__un__test"


function split(str, sep){

    let array = [];
    let startPosition = 0;

    for(let i = 0; i < string.length; i++){

        if(str.substring(i, i + sep.length) === sep){
            array.push(str.substring(startPosition, i ));
            startPosition  =  i + sep.length;
        }
    }
    array.push(str.substring(startPosition, string.length))
    return array;
}




console.log(split(string, "__"))  


