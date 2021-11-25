export function numeroEstudiantes(sede,gen) {
//console.log(sede)
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => studentsNumber(sede, gen, data))
    .catch((error) => console.log(error));
}
function studentsNumber (sede, gen, data) {
      console.log(data[sede].generacion[gen].estudiantes.length)
}

export function porcentajeCompletado(sede,gen) {
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => porcentage(sede, gen, data))
    .catch((error) => console.log(error));
}
function porcentage (sede, gen, data) {
      let x = 0;
      for (let i =0 ; i<data[sede].generacion[gen].estudiantes.length; i++) {
        x += data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado
      }
      x = x/(data[sede].generacion[gen].estudiantes.length)
      console.log(x)
}

export function renderAlumnos (sede,gen) {
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => render(sede, gen, data))
    .catch((error) => console.log(error))
}
function render (sede, gen, data) {
  console.log(data)
  for (let i=0; i<data[sede].generacion[gen].estudiantes.length; i++) {
    console.log(data[sede].generacion[gen].estudiantes[i].nombre)
  }
}

export function menosSesenta (sede,gen) {
    fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => alumnosMenosSesenta(sede, gen, data))
    .catch((error) => console.log(error))
}
function alumnosMenosSesenta (sede, gen, data) {
  for (let i = 0; i<data[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if(data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado < 60) {
      console.log(data[sede].generacion[gen].estudiantes[i].nombre)
    } else {}
  }
}

export function masNoventa (sede,gen) {
    fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => alumnosMasNoventa(sede, gen, data))
    .catch((error) => console.log(error))
}
function alumnosMasNoventa (sede, gen, data) {
  for (let i = 0; i<data[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if(data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado > 90) {
      console.log(data[sede].generacion[gen].estudiantes[i].nombre)
    } else {}
  }
}