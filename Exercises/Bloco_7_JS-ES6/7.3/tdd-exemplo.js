// Implemente uma função summationOf(number) que recebe um número inteiro e retorna o seu somatório.
// Por exemplo:
// summationOf(1) saída esperada 1: de 1 até 1 = 1
// summationOf(3) saída esperada 6: de 1 até 3 = 1 + 2 + 3 = 6
// summationOf(5) saída esperada 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15


const assert = require ('assert');

const summationOf = (number) => {
    if (typeof (number) !== "number") {
        throw Error ('Essa função só aceita número co mo parametro!');
    }

    if (typeof (number) === 0) {
        throw Error ('O nimero ZERO não pode ser usado como parametro para essa função');
    }

    let summation = 0;
    for (let index =1; index <= number; index += 1){
        summation = summation + index;
    }
    return summation
};

assert.strictEqual(typeof(summationOf), 'function', 'Valores são diferentes');
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf('a'), 91);
