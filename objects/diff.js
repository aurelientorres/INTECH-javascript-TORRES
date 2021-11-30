let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
//let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
console.log(withoutOpacity);

function diff(o1, o2){

    const propertyNames = Object.keys(o1)
    for(element of propertyNames){
        console.log(element);
        if(o2.hasOwnProperty(element)){
            delete o2[element];
        }
    }
}

diff(o1, withoutOpacity);
console.log(withoutOpacity);