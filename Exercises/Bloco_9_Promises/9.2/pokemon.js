// const requestPokemonFromServer = (callback) => {
//     setTimeout(() => {
//         callback('squirtle');
//     }, 3000)
// };

const appendPokemon = (pokemon) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = pokemon.sprites.other.dream_world.front_default;
    li.innerHTML = `${pokemon.name} <br> ${img.outerHTML}`;
    ul.appendChild(li);
}

const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/7')
    .then((response) => {
        response.json()
        .then((data) => {
            appendPokemon(data);

            fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => {
                response.json()
                .then((data) => {
                    appendPokemon(data);

                    fetch('https://pokeapi.co/api/v2/pokemon/25')
                    .then((response) => {
                        response.json()
                        .then((data) => {
                            appendPokemon(data);

                            fetch('https://pokeapi.co/api/v2/pokemon/kakuna')
                            .then((response) => {
                                response.json()
                                .then((data) => {
                                    appendPokemon(data);

                                    fetch('https://pokeapi.co/api/v2/pokemon/4')
                                    .then((response) => {
                                        response.json()
                                        .then((data) => {
                                            appendPokemon(data);
                                        })
                                    });
                                })
                            });
                        })
                    });
                })
            });
        })
    });
};

window.onload = fetchPokemon();