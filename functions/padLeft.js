function padLeft(char, str, quantity){

    let stringBuilder = [];

    for(let i = 0; i < quantity; i++){
        
        stringBuilder.push(char);

    }

    stringBuilder.push(str);

    return stringBuilder.join('')

}


console.log(padLeft(1, "bonjour", 10));

const padZeros = padLeft.bind( undefined, "0")

console.log(padZeros("test", 2))