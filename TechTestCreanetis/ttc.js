/****************************************************************/

/*
La fonction run doit retourner un nouveau tableau en ajoutant sur chaque element un parametre price_ttc
Celui-ci est le resultat de price_ht * (tva / 100 + 1)
exemple:
    paramns = [{ tva: 10, price_ht: 1 }]
    return = [{ tva: 10, price_ht: 1, price_ttc: 1.1 }]
*/

function run(params) {
    return params.map(car =>
        car = {
            ...car,
            price_ttc: (car.price_ht * (car.tva / 100 + 1))
        }
    );
}


/****************************************************************/


function test() {
    const params = [
        { marque: 'tesla', model: '3', price_ht: 35000, tva: 20 },
        { marque: 'tesla', model: 's', price_ht: 15000, tva: 20 },
        { marque: 'tesla', model: 'x', price_ht: 75000, tva: 20 },
        { marque: 'audi', model: 'tt', price_ht: 30000, tva: 20 },
    ];
    const expected = [
        { marque: 'tesla', model: '3', price_ttc: 42000, price_ht: 35000, tva: 20 },
        { marque: 'tesla', model: 's', price_ttc: 18000, price_ht: 15000, tva: 20 },
        { marque: 'tesla', model: 'x', price_ttc: 90000, price_ht: 75000, tva: 20 },
        { marque: 'audi', model: 'tt', price_ttc: 36000, price_ht: 30000, tva: 20 },
    ];
    const result = run(params);

    let error = false;
    result.forEach((e, i) => {
        if (
            e.marque !== expected[i].marque
            || e.model !== expected[i].model
            || e.price_ttc !== expected[i].price_ttc
            || e.price_ht !== expected[i].price_ht
            || e.tva !== expected[i].tva
        ) {
            error = true;
        }
    })
    console.log(error ? 'Test Failed.' : 'Test success.');
}

test()
