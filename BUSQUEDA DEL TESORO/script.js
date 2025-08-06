const pistas = [
  {
    texto: "Donde las reglas brillan como un semáforo y enseñan sin hablar...",
    respuesta: "binario",
    imagen: "img/cartel.jpg"
  },
  {
    texto: "Una vista al exterior enjaulada, como si los ojos tuvieran barrotes...",
    respuesta: "scratch",
    imagen: "img/ventana.jpg"
  },
  {
    texto: "Aquí ondea el orgullo en lo alto, tocando el cielo cada mañana...",
    respuesta: "codigo",
    imagen: "img/mastil.jpg"
  },
  {
    texto: "Dos mitades separadas por una red, donde las pelotas rebotan como ideas...",
    respuesta: "condicional",
    imagen: "img/pingpong.jpg"
  },
  {
    texto: "El oasis moderno donde cada gota revive al sediento explorador...",
    respuesta: "programar",
    imagen: "img/bebedero.jpg"
  },
  {
    texto: "Con raíces profundas y brazos al cielo, guarda secretos en sus hojas...",
    respuesta: "arbol",
    imagen: "img/arbol.jpg"
  },
  {
    texto: "Aunque parezca dormida, esta caja verde guarda serpientes que dan energía a todo lo que toca...",
    respuesta: "caja",
    imagen: "img/caja.jpg"
  }
];

let pistaActual = 0;

function iniciarJuego() {
  pistaActual = 0;
  mostrarPista();
}

function mostrarPista() {
  const pistaElemento = document.getElementById("pista");
  const imagenElemento = document.getElementById("imagenPista");

  const pista = pistas[pistaActual];
  pistaElemento.textContent = pista.texto;

  if (pista.imagen) {
    imagenElemento.src = pista.imagen;
    imagenElemento.style.display = "block";
  } else {
    imagenElemento.style.display = "none";
  }

  document.getElementById("respuesta").value = "";
}

function verificarRespuesta() {
  const input = document.getElementById("respuesta").value.trim().toLowerCase();
  const respuestaCorrecta = pistas[pistaActual].respuesta.toLowerCase();

  if (input === respuestaCorrecta) {
    pistaActual++;
    if (pistaActual < pistas.length) {
      mostrarPista();
    } else {
      document.getElementById("pista").textContent = "¡Felicitaciones! Encontraste todas las pistas.";
      document.getElementById("imagenPista").style.display = "none";
    }
  } else {
    alert("Esa no es la respuesta correcta. ¡Probá de nuevo!");
  }
}
