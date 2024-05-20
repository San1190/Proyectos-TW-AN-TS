//Es un lenguaje muy similar a JavaScript, pero con algunas diferencias
// TypeScript es un lenguaje de programación que es un superconjunto de JavaScript desarrollado por Microsoft.

console.log("Hola mundo");

// Variables
// TypeScript es un lenguaje de tipado fuerte, lo que significa que las variables deben ser declaradas con un tipo de dato específico.
// let nombre_variable: tipo_dato = valor;

let nombre: string = "Juan";
let edad: number = 25;
let programador: boolean = true;

// Tipos de datos
// number: número


// funciones
// TypeScript también permite declarar funciones con un tipo de dato específico.
// function nombre_funcion(parametro: tipo_dato): tipo_dato {
//     // código de la función
// }

//colocar el export para que se pueda importar en otro archivo
function suma(a: number, b: number): number {
    return a + b;
}


class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }
}


