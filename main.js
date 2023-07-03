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
