function mostraVeiculoMarca (veiculo, marca) {
    console.log(`Oveiculo ${veiculo} é da marca ${marca}`);
}

mostraVeiculoMarca('Fusca TSI', 'Volks');
mostraVeiculoMarca('Corsa', 'GM');

const mostraVeiculo = mostraVeiculoMarca;

console.log(mostraVeiculo);