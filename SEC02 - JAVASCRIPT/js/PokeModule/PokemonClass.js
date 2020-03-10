export default class Pokemon{
    constructor(nombre, noDexNac, tipos, habilidades){
        this.nombre = nombre;
        this.noDexNac = noDexNac;
        this.tipos = tipos;
        this.habilidades = habilidades;
    }

    mostrarDatos(){
        return `No. Dex Nacional: ${this.noDexNac} nombre: ${this.nombre} tipos: ${this.tipos} habilidades: ${this.habilidades}`
    }
}