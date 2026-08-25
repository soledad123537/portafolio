// ------- Año automático en el footer -------
document.getElementById('year').textContent = new Date().getFullYear();

// ------- Efecto de escritura en la terminal del hero -------
const linea = "> iniciando portafolio... listo ✔";
const elemento = document.getElementById('typed-line');
let i = 0;

function escribir() {
  if (i < linea.length) {
    elemento.textContent += linea.charAt(i);
    i++;
    setTimeout(escribir, 40);
  }
}
escribir();

// ------- Datos de proyectos (edítalos con los tuyos) -------
const proyectos = [
  {
    titulo: "mi portafolio personal",
    descripcion: "sitiio web hecho con HTML,css y JavScript como parte de mi aprendizaje, incluye animaciones y iseño responsive.",
    enlace: "https://github.com/soledad123537/portafolio"
  },
  {
    titulo: "calculadora basica",
    descripcion: "ejercicio de practica con javascript parareforzar logica y manejodel DOM.",
    enlace: "#"
  },
  {
    titulo: "pagina de aterrizaje",
    descripcion: "landig page estatica practicando maquetacion con HTML y CSS.",
    enlace: "#"
  }
];

const contenedor = document.getElementById('projects');

proyectos.forEach(proyecto => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'project-card';
  tarjeta.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <a href="${proyecto.enlace}" target="_blank" rel="noopener">Ver proyecto →</a>
  `;
  contenedor.appendChild(tarjeta);
});
