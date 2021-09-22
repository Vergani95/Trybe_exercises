const numbers = require('./numbers');

describe('Verifica numeros em array', () => {
    it('Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
        expect(numbers([1, 2, '3', 4, 5])).toEqual(true);
    })
})