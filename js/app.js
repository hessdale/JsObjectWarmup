let my_city = {
    name: `Daleshouse`,
    population: 2550,
    is_capital: true,
    communities= 
};
let communities = [
    {
        name: BigDale,
        population: 2000,
    },
    {
        name: LittleDale,
        population: 150
    },
    {
        name: smallDale,
        population: 200
    },
    {
        name: mediumDale
        , population: 600
    },
    {
        name: shortDale,
        population: 10000
    }

];
if (my_city[`is_capital`] === true) {
    console.log(`${my_city[`name`]},${my_city[`population`]}`);
} else {
    console.log(`not important enough`);
}

let counter = 0;

while (counter < my_city.communities.length) {
    console.log(`${my_city.communities[counter]}`);
    counter = counter + 1;
}
