let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
dump(obj); // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}

function dump(obj){
    output = [];
    const propertyNames = Object.keys(obj);
    let i = 0;

    output.push("{");

    for(element of propertyNames){
        i++;
        if(Array.isArray(obj[element]))
            outputString = element + ":[" + obj[element] + "]";
        else
            outputString = element + ":\"" + obj[element] + "\"";

        output.push(outputString)

        if(i != propertyNames.length){
            output.push(", ")
        }
    }
    output.push("}")

    console.log(output.join(''))
}