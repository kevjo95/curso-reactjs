let capitulo = 5

switch (capitulo) {
    case 1: // 1.1 - Scope de variables
        let genero = "Rock";

        if (genero) {
            let genero = "Grunge"
            console.log("Dentro del IF ", genero)
        }

        console.log("Despues del IF ", genero);    
        break;
    case 2: //1.2 Template de Strings
        const nombre = "Bulbasaur"
        const tipo = "Planta"

        console.log(`Pokemon: ${nombre}, Tipo: ${tipo}`);
        break;
    case 3: //1.3 Funciones
        //Funcion dentro de variable
        const consultaPokemon = function (nombreCliente) {
            console.log(`Consulta datos del Pokemon: ${nombreCliente}`)
        }
        consultaPokemon('Tyranitar');

        // Funcion llamada por si misma
        (function (nombreCliente) {
            console.log(`Consulta datos del Pokemon: ${nombreCliente}`)
        })();
        break;
    case 4: //1.4 Funciones - parametros default
        function atacar(pokemon, ataque = 'combate') {
            console.log(`${pokemon} a usado ${ataque}`)
        }
        atacar('Incineroar', 'Lariat');
        atacar('Incineroar'); 
        break;
    case 5: //1.5 Funciones de flecha
        let accion = (pokemon, ataque = 'combate') => {
            console.log(`${pokemon} a usado ${ataque}`)
        }
        accion('Incineroar', 'Lariat');
        accion('Incineroar'); 

        // Cual es la diferencia entre arrow fx y normal fx?
        //https://es.stackoverflow.com/questions/101927/diferencia-entre-arrow-function-y-function-normal-al-llamar-al-m%C3%A9todo-subscribe
        break;
    case 6: //1.6 Objetos JS - Object literal
        
        break;
    default:
        break;
}    
    