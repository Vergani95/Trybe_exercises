const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

function filtrarComecandoPor (arrayInicial, letraInicial) {
    const arrayResposta = [];

    for (let info of arrayInicial) {
        if(info [0] !== letraInicial) {
            arrayResposta.push (info);
        }
    }
    return arrayResposta;
}


function filtrarMenorQue (arrayInicial, qtdLetras) {
    const arrayResposta = [];

    for (let info of arrayInicial) {
        if(info.length < qtdLetras) {
            arrayResposta.push (info);
        }
    }
    return arrayResposta;
}

// Filtrar jogadores que o nome não comece pela letra J
let jogadoresFiltrados = filtrarComecandoPor(jogadores, 'J');

console.log(jogadoresFiltrados);
// Filtrar jogadores que o nome não comece pela letra F
jogadoresFiltrados = filtrarComecandoPor (jogadoresFiltrados, 'F');

console.log(jogadoresFiltrados);

// Filtrar jogadores que o nome tenha menos que 5 letras

jogadoresFiltrados = filtrarMenorQue (jogadoresFiltrados, 5);
console.log(jogadoresFiltrados);
