let capitulo = 16

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
        const PokemonEquipoObj = {
            nombre: 'Bulbasaur',
            noDexNac: 1,
            nivel: 5
        }
        console.log(PokemonEquipoObj)
        console.log(`${PokemonEquipoObj.nombre} ha subido al nivel ${PokemonEquipoObj.nivel + 1}!`);
        break;
    case 7: //2.17 Object Constructor
        function PokemonEquipo(nombre, noDexNac, tipos, nivel) {
            this.nombre = nombre;
            this.noDexNac = noDexNac;
            this.tipos = tipos
            this.nivel = nivel;
        }

        let bulbasaur = new PokemonEquipo('bulbasaur', '001', ['planta'], 5);
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
    case 11: //2.21 Funciones de objeto
        const wizard = {
            nombre: 'Magdolerys',
            casa: 'Panglerous',
            especialidad: 'artes oscuras',
            edad: 423,
            lanzarHechizo(hechizo){
                console.log(`${this.nombre} ha lanzado el hechizo ${hechizo}`);
            }
        }
        wizard.lanzarHechizo('Lumus');
        break;   
    case 12: //2.22 Arreglos, maps y object keys
        //Arreglos
        const carritoCompra = ['Producto 1', 'Producto 2', 'Producto 3']
        const divApp = document.querySelector('#app');
        divApp.innerHTML = carritoCompra;
        
        //Creacion de nodos html
        let contenido = document.createElement('ul');
        carritoCompra.forEach(producto => {
            let item = document.createElement('li')
            item.innerHTML = `<li>${producto}</li>`
            contenido.appendChild(item);
        });
        divApp.appendChild(contenido);
        
        //Maps de arreglos
        const productosFactura = carritoCompra.map(producto =>{
            return producto += ' [Facturado]';
        });
        console.log(carritoCompra);
        console.log(productosFactura);

        //Keys de objetos
        const carrera = {
            nombre: 'Ingenieria en Sistemas',
            facultad: 'Facultad de ingenieria',
            aniosEstipulados: 5 
        }
        console.log(carrera);
        console.log(Object.keys(carrera));
        break;    
    case 13: //2.23 Spread operator
        /*Al crear una copia por referencia, en caso de que se modifique 
        la copia, el original tambien se vera afectado*/
        let lenguajes = ['C++', 'Java', 'Python', 'SQL']
        let copiaLenguajes = lenguajes;
        copiaLenguajes.push('JavaScript');
        console.log(lenguajes, copiaLenguajes);

        /*Se crea una nueva variable y referencia a partir de otra, lo que las 
        desliga donde un cambio sobre la nueva no afectan la origen */
        let lenguajes2 = ['C++', 'Java', 'Python', 'SQL']
        let copiaLenguajes2 = [...lenguajes2];
        copiaLenguajes2.push('JavaScript');
        console.log(lenguajes2, copiaLenguajes2);
        break;
    
    case 14: //2.25 Promesas
        const promesa = new Promise((resolve, reject) => {
            let numRand = Math.floor(Math.random() * (7 - 2)) + 2;
            // console.log(numRand) 
            setTimeout(() => {
                numRand >= 5 ? resolve(numRand) : reject(new Error('menor a 5'));
            }, 1000);

        });

        promesa 
            .then(numRand => console.log(`PR1 ${numRand}`))
            .catch(error => console.error(`PR1 ${error}`));
        
        function loteria(ultimoBoleto = 999, primerBoleto = 0) {
            let promesa2 = new Promise((resolve, reject) => {
                let numRand2 = Math.floor(Math.random() * (ultimoBoleto - primerBoleto)) + primerBoleto;
                // console.log(numRand2) 
                setTimeout(() => {
                    numRand2 >= primerBoleto ? resolve(numRand2) : reject(new Error('menor a 5'));
                }, 1000);
            });    
            return promesa2;
        }

        loteria(555, 10)
            .then(numRand2 => console.log(`El ganador es ${numRand2}`))
            .catch(() => console.log('Se debe sortear de nuevo, ganador vacio'));
        break;
    case 15: // 2.26 Promesas con AJAX 
        const descargarUsuarios = (cantidad) => new Promise((resolve, reject) => {
            let randomUserApi = `https://randomuser.me/api/?results=${cantidad}&nat=us`
            
            //llamado ajax
            let xhr = new XMLHttpRequest();
    
            //Abrir la conexion
            xhr.open('GET', randomUserApi, true);

            //on load

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText).results)
                } else {
                    reject({errno: 500, errmsg: xhr.statusText})
                }
            }
            xhr.onerror = (error) => {
                reject(error);
            }

            xhr.send();
        });
        
        descargarUsuarios(5)
            .then(
                datos => console.log(datos),
                error => console.log(error)
            );

        break;
    case 16: //2.28 Clases | 2.29 Herencia
        class Pokemon{
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

        let poke1 = new Pokemon('Bulbasaur', 001, ['planta'], 'espesura');
        let poke2 = new Pokemon('Pikachu', 025, ['electrico'], 'estatica');

        console.log(poke1.mostrarDatos());
        console.log(poke2.mostrarDatos());

        class PokemonCaja extends Pokemon{
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

        let pokeCaja1 = new PokemonCaja('Incineroar', 765, ['fuego', 'siniestro'], ['intimidacion'], 'Firme', 46)
        console.log(pokeCaja1.mostrarDatos());
        console.log(pokeCaja1.subirNivel());
    default:
        break;
}    
    