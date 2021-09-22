const convertToRoman = require('./roman-numerals');

describe('Requisito 1', () => {
    test('Converte números de 1 a 4 para numerais romanos', () => {
        expect(convertToRoman(1)).toBe('I');
        expect(convertToRoman(2)).toBe('II');
        expect(convertToRoman(3)).toBe('III');
        expect(convertToRoman(4)).toBe('IV');
    })
    
    test('Converte número 5 para romanos', () => {
        expect(convertToRoman(5)).toBe('V');
    })
    
    test('Converte número 6 para romanos', () => {
        expect(convertToRoman(6)).toBe('VI');
    })
    
    test('Converte número 7 para romanos', () => {
        expect(convertToRoman(565)).toBe('DLXV');
    })
})