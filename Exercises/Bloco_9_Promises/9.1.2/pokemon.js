// const requestPokemonFromServer = (callback) => {
//   setTimeout(() => {
//     callback('squitle');
//   }, 3000)

// };

const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img')
  img.src = pokemon.sprites.other.dream_word.front_default;
  li.innerHTML = `${pokemon.name} <br> ${img.outerHYML}`;
  ul.appendChild(li);
};

const fetchpokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then((response) => {
      response.json()
        .then((data) => {
          appendPokemon(data);

          fetch('https://pokeapi.co/api/v2/pokemon/6')
            .then((response) => {
              response.json()
                .then((data) => {
                  appendPokemon(data);
                })
            });

          fetch('https://pokeapi.co/api/v2/pokemon/9')
            .then((response) => {
              response.json()
                .then((data) => {
                  appendPokemon(data);
                })
            });

            
        })
    });
};

window.onload = fetchpokemon;