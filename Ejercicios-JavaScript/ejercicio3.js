//# Ejercicio 3
//3. un archivo.js con el código funcional que refleje su nombre notas para tres materias el promedio de las materias y si aprobó o no aprobó con nota minima 3.5

let nombre = "Juan Diego";

let materias = function(matematicas, ingles, Git) {
    let promedio = (matematicas + ingles + Git) / 3;
    let estado = promedio >= 3.5 ? "Aprobado" : "No Aprobado";
    return `El aprendiz ${nombre} tiene un promedio de ${promedio.toFixed(2)} y su estado es: ${estado}`;
}

