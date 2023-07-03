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
