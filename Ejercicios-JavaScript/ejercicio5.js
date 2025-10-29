//# Ejercicio 5
//un archivo.js con el código funcional que nos muestre en consola si los numeros que digitamos son pares o impares y sube el comit a github
const prompt = require('prompt-sync')({sigint: true});

const numero = [];
for(let i = 0; i < 5; i++){
    numero[i] = parseFloat(prompt("ingrese un numero: "))

    if (numero[i] % 2 === 0) {
        console.log("El número " + numero[i] + " es par.");
    } 
    else {
        console.log("El número " + numero[i] + " es impar.");
    }
}
