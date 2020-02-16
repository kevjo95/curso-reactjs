let capitulo = 5

switch (capitulo) {
    case 1: // 2.11 - Scope de variables
        let genero = "Rock";

        if (genero) {
            let genero = "Grunge"
            console.log("Dentro del IF ", genero)
        }

        console.log("Despues del IF ", genero);    
        break;
    case 2: //2.12 Template de Strings
        const nombre = "Bulbasaur"
        const tipo = "Planta"

        console.log(`Pokemon: ${nombre}, Tipo: ${tipo}`);
        break;
    case 3: //2.13 Funciones
        //Funcion dentro de variable
        const consultaPokemon = function (nombrePokemon) {
            console.log(`Consulta datos del Pokemon: ${nombrePokemon}`);
        }
        consultaPokemon('Tyranitar');

        // Funcion llamada por si misma
        (function (nombrePokemon) {
            console.log(`Consulta datos del Pokemon: ${nombrePokemon}`)
        })();
        break;
    case 4: //2.14 Funciones - parametros default
        function atacar(pokemon, ataque = 'combate') {
            console.log(`${pokemon} a usado ${ataque}`)
        }
        atacar('Incineroar', 'Lariat');
        atacar('Incineroar'); 
        break;
    case 5: //2.15 Funciones de flecha
        let accion = (pokemon, ataque = 'combate') => {
            console.log(`${pokemon} a usado ${ataque}`)
        }
        accion('Incineroar', 'Lariat');
        accion('Incineroar'); 

        // Cual es la diferencia entre arrow fx y normal fx?
        //https://es.stackoverflow.com/questions/101927/diferencia-entre-arrow-function-y-function-normal-al-llamar-al-m%C3%A9todo-subscribe
        break;
    case 6: //2.16 Objetos JS - Object literal
        const Pokemon = {
            nombre: 'Bulbasaur',
            noDexNac: 1,
            nivel: 5
        }
        console.log(Pokemon)
        console.log(`${Pokemon.nombre} ha subido al nivel ${Pokemon.nivel + 1}!`);
        break;
    case 7: //2.17 Object Constructor
        function PokemonEquipo(nombre, noDexNac, tipos, nivel) {
            this.nombre = nombre;
            this.noDexNac = noDexNac;
            this.tipos = tipos
            this.nivel = nivel;
        }

        const bulbasaur = new PokemonEquipo('bulbasaur', '001', ['planta'], 5);
        console.log(`Haz elegido al inicial tipo ${bulbasaur.tipos[0]}, ${bulbasaur.nombre} como tu pokémon inicial!`);
        break;
    case 8: //2.18 Prototypes
        // Object constructor
        function Telefonos(marca, modelo, precio) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }

        // se agrega un prototype
        Telefonos.prototype.mostrarInfo = () => {
            return `Su compra es ${cel1.marca} ${cel1.modelo} con un precio de ${cel1.precio}`
        }
        const cel1 = new Telefonos('LG', 'G7 ThinQ', '5,500.00 LPS');
        console.log(cel1.mostrarInfo());
        break;
    case 9: //2.19 Object Destructuring
        const JS = {
            version: {
                nueva: 'ES6+', 
                anterior: 'ES5'
            },
            frameworks: ['AngularJS'],
            librerias: ['ReactJS', 'VueJS']
        }
        let let_version = JS.version.nueva;
        let let_frameworks = JS.frameworks[0];
        console.log(let_version, let_frameworks);

        //Se nombra la variable con la misma key del object, el lo mapea al primer nivel indicado
        let {version} = JS;
        let {nueva} = JS.version

        console.log(version, nueva);
        break;
    case 10: //2.20 Objects Enhancement
        
        let armaCorta = 'latigo';
        let armaMedia = 'lanza';
        let armaLarga = 'hacha';
        let recuperacion = 'latigo';

        //Forma vieja
        const jugador1 = {
            nombre: 'Byleth',
            armaCorta: armaCorta,
            armaMedia: armaMedia,
            armaLarga: armaLarga,
            recuperacion: recuperacion 
        }
        //Forma nueva
        const jugador2 = {nombre:'Byleth', armaCorta, armaMedia, armaLarga, recuperacion};

        console.log(jugador1);
        console.log(jugador2);
        break;
    default:
        break;
}    
    