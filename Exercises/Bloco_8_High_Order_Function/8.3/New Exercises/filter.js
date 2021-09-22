const cities = [
    {state: 'AM', name: 'Manaus', region:'N'},
    {state: 'PA', name: 'Belem', region:'N'},
    {state: 'TO', name: 'Porto Nacional', region:'N'},
    {state: 'MG', name: 'Nepomuceno', region:'SE'},
    {state: 'BA', name: 'Cachoeira', region:'NE'},
    {state: 'PR', name: 'Curitiba', region:'S'},
    {state: 'SP', name: 'Hotolandia', region:'SE'},
    {state: 'RN', name: 'Touros', region:'NE'},
    {state: 'TO', name: 'Tres Pedras', region:'N'},
    {state: 'CE', name: 'Jericoaquara', region:'NE'},
];

// Com Filter

const citiesNE = cities.filter((city) => {
    return city.region === 'NE'
});

console.table(citiesNE);

const citiesTO = cities.filter((city) => {
    return city.state === 'TO';
});

console.table(citiesTO)

const citiesC = cities.filter((city) => {
    return city.name.startsWith('C');
});

console.table(citiesC)

// ou então

const citiesC2 = cities.filter((city) => {
    return city.name[0] === 'C';
});


console.table(citiesC2)