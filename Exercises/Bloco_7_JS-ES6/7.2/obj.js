const pessoa = {
  nome: 'Vine',
  lastName: 'Vergani',
  idade: 25,
  usaOculos: true,
}

pessoa.time='Inter';
pessoa['estado']='Rio Grande do Sul';
console.table(pessoa);
console.log( `o ${pessoa.nome} terce paro o ${pessoa.time}`);

pessoa.endereco = {
  rua: 'sempre verde',
  num: 123,
  bairro : 'Ana Rech'
}

console.table (pessoa);