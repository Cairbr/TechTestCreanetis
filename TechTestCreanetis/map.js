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

const testArray = [1, 2, 3, 4, 5, 6];
const testEmptyArray = [];

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

testMap = [];
testMap = mappy(testArrayOfObjects, addPriceTTC);

console.log(testMap.length)
testMap.forEach(e => console.log(e));





