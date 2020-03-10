import { PokemonCaja } from './PokemonCajaClass.js';

let pokemonInicial = new PokemonCaja('Litten', 267, ['fuego'], ['intimidacion'], 'alegre', 5);
    
function recibirPokemon(pokemon) {
    return `Felicidades has recibido a tu Pokèmon inicial ${pokemon.nombre}`;
}

console.log(recibirPokemon(pokemonInicial));
console.log('Hola');
