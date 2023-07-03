const alumnos = [];

let menu = true;

const opciones = {
  1: agregarAlumno,
  2: alumnosAprobados,
  3: alumnosDesaprobados,
  4: () => {
    menu = false;
  },
};

const letrasRegex = /^[a-zA-Z\s]+$/;
const numerosRegex = /^\d+$/;

while (menu) {
  const opcion = prompt(
    `Elige una opcion:
        1. Agregar alumno
        2. Alumnos aprobados
        3. Alumnos desaprobados
        4. Salir`
  );

  if (opciones[opcion]) {
    opciones[opcion]();
  } else {
    alert("Opcion invalida. Por favor seleccione una opcion valida");
  }
}

function agregarAlumno() {
  let nombre = prompt("Ingrese el nombre del alumno:");
  while (!letrasRegex.test(nombre)) {
    alert("El nombre solo debe tener letras. Pruebe nuevamente.");
    nombre = prompt("Ingrese el nombre del alumno:");
  }

  const notas = [];
  let nota1 = prompt("Ingrese la primer nota del alumno:");
  while (!numerosRegex.test(nota1)) {
    alert("La nota debe ser un numero. Pruebe nuevamente");
    nota1 = prompt("Ingrese la primer nota del estudiante:");
  }
  notas.push(parseFloat(nota1));

  let nota2 = prompt("Ingrese la segunda nota del alumno:");
  while (!numerosRegex.test(nota1)) {
    alert("La nota debe ser un numero. Pruebe nuevamente");
    nota1 = prompt("Ingrese la segunda nota del estudiante:");
  }
  notas.push(parseFloat(nota2));

  const promedio = calcularPromedio(notas);

  alumnos.push({ nombre, notas, promedio });
}

function calcularPromedio(notas) {
  const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return suma / notas.length;
}
