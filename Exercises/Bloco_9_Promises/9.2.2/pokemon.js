
const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');
  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} <br> ${img.outerHTML}`;
  ul.appendChild(li);
}

const getPokemonPromisse = (pokemonName) => {
  return new Promise ((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      response.json()
        .then((data) => {
          appendPokemon(data);
          resolve();
        })
      });
  })
} 

const fetchPokemonPromisse = () => {
  getPokemonPromisse('25');

}


window.onload = getPokemonPromisse();

//9.2

// const getPokemon = (pokemonName, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//       response.json()
//         .then((data) => {
//           appendPokemon(data);
//        (callback) ? callback () : undefined          
//         })
//       });
// };

// const fetchPokemon = () => {
//   getPokemon('squirtle', 
//     getPokemon('pikachu', 
//       getPokemon('charmander', 
//         getPokemon('blastoise'))));

// }



//9.1

// const fetchPokemon = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/7')
//     .then((response) => {
//         response.json()
//         .then((data) => {
//             appendPokemon(data);

//             fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//             .then((response) => {
//                 response.json()
//                 .then((data) => {
//                     appendPokemon(data);

//                     fetch('https://pokeapi.co/api/v2/pokemon/25')
//                     .then((response) => {
//                         response.json()
//                         .then((data) => {
//                             appendPokemon(data);

//                             fetch('https://pokeapi.co/api/v2/pokemon/kakuna')
//                             .then((response) => {
//                                 response.json()
//                                 .then((data) => {
//                                     appendPokemon(data);

//                                     fetch('https://pokeapi.co/api/v2/pokemon/4')
//                                     .then((response) => {
//                                         response.json()
//                                         .then((data) => {
//                                             appendPokemon(data);
//                                         })
//                                     });
//                                 })
//                             });
//                         })
//                     });
//                 })
//             });
//         })
//     });
// };

// window.onload = getPokemonPromisse();