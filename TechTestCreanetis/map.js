/****************************************************************/

/*
Refaire la fonction map
*/
function mappy(array, func) {
    let returnArray = [];

    array.forEach(e => {
        returnArray.push(func(e));
    });

    return returnArray;
}


/****************************************************************/

/*
Tests de la fonction mappy()
*/

const testArray = [1, 2, 3, 4, 5, 6];

const testArrayOfObjects = [
    { marque: 'tesla', model: '3', price_ht: 35000, tva: 20 },
    { marque: 'tesla', model: 's', price_ht: 15000, tva: 20 },
    { marque: 'tesla', model: 'x', price_ht: 75000, tva: 20 },
    { marque: 'audi', model: 'tt', price_ht: 30000, tva: 20 },
];


function addTwo(number) {
    return number + 2;
}

function addPriceTTC(car) {
    return {
        ...car,
        price_ttc: (car.price_ht * (car.tva / 100 + 1))
    };
}

console.log("\nArray retournée par mappy() avec addTwo()")
console.log(mappy(testArray, addTwo));

console.log("\nArray d'objets retournée par mappy()")
var testMap = mappy(testArrayOfObjects, addPriceTTC);
testMap.forEach(e => console.log(e));

console.log("\nArray d'objets passée à mappy(), vérification de non mutation")
testArrayOfObjects.forEach(e => console.log(e));




