/*Ejercicio 1: 
Dado el siguiente arreglo de números, utiliza el método map() para crear un nuevo arreglo que contenga
el cuadrado de cada número. let numeros = [2, 4, 6, 8, 10]; */

let numeros = [2, 4, 6, 8, 10];
let cuadrados = numeros.map(function(numero) {
    return numero * numero;
  });
  
  console.log(cuadrados); 


/*Ejercicio 2: Dado el siguiente arreglo de nombres, usa el método filter() para generar un nuevo arreglo 
que contenga solo los nombres que tengan más de 5 
caracteres. let nombres = ['Juan', 'María', 'Carlos', 'Ana', 'Pedro', 'Luisa'];  */

let Nombres = ['Juan', 'María', 'Carlos', 'Ana', 'Pedro', 'Luisa'];

let nombres = Nombres.filter(function(nombre) {
  return nombre.length > 5;

 });

 console.log(nombres);

/*Ejercicio 3: Dado el siguiente arreglo de números,
utiliza el método reduce() para obtener la suma de todos los elementos. let numeros = [10, 25, 83, 41, 5]; */

let numeros2 = [10, 25, 83, 41, 5];
 let SumaDeNumeros = numeros2.reduce(function(SumaNumeros,mas){
   return SumaNumeros + mas;  
 }, 0);
  
 console.log (SumaDeNumeros);

/*Ejercicio 4: Dado el siguiente arreglo de palabras, utiliza el método every() para verificar
 si todas las palabras tienen más de 3 caracteres. let palabras = ['Hola', 'Mundo', 'JavaScript', 'Web']; */
 
let palabras = ['Hola', 'Mundo', 'JavaScript', 'Web']; 
 let verificar = palabras.every(function(TresCaracteres){
  return TresCaracteres.length > 3;
 });
 console.log (verificar)

/*Ejercicio 6: Dado el siguiente objeto: const persona = { nombre: 'Juan', edad: 25, ciudad: 'Ejemplo' }; 
Utiliza un bucle for...in para imprimir cada clave y su respectivo valor con console.log */

const persona = {Nombre: 'Juan', Edad: 25, Ciudad: 'Bogotá'};
for (const dato in persona) {
    console.log(`${dato}: ${persona[dato]}`); 
 } 

 



