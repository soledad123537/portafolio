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
    titulo: "Proyecto 1",
    descripcion: "Breve descripción de qué hace este proyecto y qué aprendiste al construirlo.",
    enlace: "#"
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Breve descripción de qué hace este proyecto y qué aprendiste al construirlo.",
    enlace: "#"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Breve descripción de qué hace este proyecto y qué aprendiste al construirlo.",
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
