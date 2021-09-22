const assert = require('assert');
const numbers = require('./numbers');

// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
assert.strictEqual(numbers([1, 2, 3, 4, 5]), true);

// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna false
assert.strictEqual(numbers([1, 2, '3', 4, 5]), false);

// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
assert.strictEqual(numbers([1, 'a', 3]), false);