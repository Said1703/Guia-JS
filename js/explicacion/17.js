/* Las funciones son una serie de procedimientos que se ejecutan en un orden determinado,
y que pueden recibir valores de entrada, llamados parámetros, y devolver valores de salida,
llamados retornos. En JavaScript, las funciones son objetos de primera clase, lo que significa que
 pueden ser asignadas a variables, pasadas como argumentos y devueltas por otras funciones. */

 //Declaración de Función
 //(){}

 function sumar(){ // <- Cuerpo de la función
    console.log(10*10);
 }

 sumar(); // <- Llamado de la función

 //Expresión de Función
 // = () {}
 const sumar2 = function(){ // <- Cuerpo de la función
    console.log(3+3);
 }

 sumar2(); // <- Llamado de la función

 // IIFE
 /* 
 (() {
 })();
  */
 (function() { // <- Cuerpo de la función
console.log('Esto es una función');
 })(); // <- Llamado de la función