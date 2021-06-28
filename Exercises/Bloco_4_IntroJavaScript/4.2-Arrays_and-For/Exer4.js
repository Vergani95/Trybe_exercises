let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index=0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
    soma=soma+numbers[index];
}
media = soma/numbers.length;

console.log("A soma é: ", soma )
console.log("A média aritimetica é:", media)
if (media<=20) {
    console.log("Valor menor ou igual a 20")
}
else {
    console.log("Valor maior a 20")
}