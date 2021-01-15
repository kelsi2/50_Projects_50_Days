const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  // Start looping at first index we want to retrieve
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  // Capitalize first letter of name than add rest of the name
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  
  // Pad the beginning of the id number with 0, maximum 3 digits (e.g. < 10 will have 2 zeros, > 10 will have one zero, > 100 will have no zeros)
  const id = pokemon.id.toString().padStart(3, '0')
  
  // Type is in an array of objects, we can access it by type.type.name
  const poke_types = pokemon.types.map(type => type.type.name);
  // If type exists in main_types, add it
  const type = main_types.find(type => poke_types.indexOf(type) > -1);
  
  // Set background color to depend on the type of card
  const color = colors[type];
  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
      <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
      </div>
      <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
      </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
}

fetchPokemons();