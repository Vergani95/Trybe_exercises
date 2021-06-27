let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = -9999999999999999;
let impares=0;
let menor=99999999999999;

for (let index=0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
    soma=soma+numbers[index];
}
media = soma/numbers.length;

console.log("A soma é: ", soma )
console.log("A média aritimetica é:", media)

for (let ind=0; ind < numbers.length; ind +=1) {
   if (numbers[ind]>maior){
       maior=numbers[ind];
   }
}
console.log("O maior número é ", maior )

for (let ind=0; ind < numbers.length; ind +=1) {
    if ((numbers[ind]%2) > 0 ){
        impares +=1;
    }
 }
 console.log("A quantidade de numeros impares é: ", impares)

 for (let ind=0; ind < numbers.length; ind +=1) {
    if (numbers[ind]< menor){
        menor=numbers[ind];
    }
 }
 console.log("O menor número é : ", menor)