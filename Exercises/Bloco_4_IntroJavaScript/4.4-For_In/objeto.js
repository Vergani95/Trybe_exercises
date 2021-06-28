let pessoaEstudane = {
    nome : "Ramona" ,
    sobreNome : "Jesus",
    idade: 70,
    apelido : "Espanhola"
}
console.log("meu nome é ", pessoaEstudane.nome, pessoaEstudane.sobreNome);
console.log("meu nome é ", pessoaEstudane['nome'], pessoaEstudane['sobreNome']);

pessoaEstudane.turma='Turma 14A';

console.log(pessoaEstudane);
delete pessoaEstudane.apelido;
console.log(pessoaEstudane);