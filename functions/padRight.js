function padRight(char, str, quantity){

    let stringBuilder = [];


    stringBuilder.push(str);

    for(let i = 0; i < quantity; i++){
        
        stringBuilder.push(char);

    }

    return stringBuilder.join('')

}


console.log(padRight(1, "bonjour", 10));