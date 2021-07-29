const person = {
    nome : 'Marcia',
    sobreNome: 'Dantas'
};

person.greet = (callback) => {
    return callback();
};

const greetingPeople = (person) => {
    return `Olá ${person.nome} ${person.sobreNome}, tudo bem com Você?`
}

console.log(greetingPeople(person));

const formalGreeting = (person) => {
    return `Oi ${person.nome}, tudo bem?`
}

console.log(formalGreeting(person));

console.log(person.greet(greetingPeople));