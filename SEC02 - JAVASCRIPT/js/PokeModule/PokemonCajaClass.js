import { Pokemon } from './PokemonClass.js';

export default class PokemonCaja extends Pokemon{
    constructor(nombre, noDexNac, tipos, habilidades, naturaleza, nivel){
        super(nombre, noDexNac, tipos, habilidades);
        this.naturaleza = naturaleza
        this.nivel = nivel
    }

    mostrarDatos(){
        return `No. Dex Nacional: ${this.noDexNac} nombre: ${this.nombre} tipos: ${this.tipos} habilidades: ${this.habilidades} de Naturaleza: ${this.naturaleza} y nivel ${this.nivel}`
    }

    subirNivel(){
        this.nivel += 1;
        return `${this.nombre} ha subido al nivel ${this.nivel}!`
    }
}