
// --------------------
// 🔐 CONTRASEÑA
// --------------------
function verificar() {

  const valor = document.getElementById("clave").value.toLowerCase();
  const clave = "9/8/2012";

  if (valor === clave) {

    document.getElementById("bloqueo").style.display = "none";
    document.getElementById("contenido").classList.remove("oculto");

    document.getElementById("musica").play();

    escribirCarta();
    confeti();

  } else {
    document.getElementById("error").innerText =
      "Mmm... piensa en un día muy especial ❤️";
  }
}

// --------------------
// ✍️ TEXTO TIPO ESCRITURA
// --------------------
const textoCarta = 
"Te quiero mucho ❤️\n\nLo siento por enfadarme a veces contigo.\n\nEspero que pases un muy buen día\n\ny que te gusten nuestros regalos 😘";

let i = 0;

function escribirCarta() {
  const el = document.getElementById("typed");

  function escribir() {
    if (i < textoCarta.length) {
      el.innerHTML += textoCarta.charAt(i);
      i++;
      setTimeout(escribir, 40);
    }
  }

  escribir();
}

// --------------------
// 💌 MENSAJES
// --------------------
const mensajes = [
  "Eres la mejor mamá del mundo 🌍",
  "Gracias por todo lo que haces 💖",
  "Siempre estás conmigo ❤️",
  "No hay nadie como tú 😘",
  "Te mereces todo lo bueno del mundo 🎉"
];

let m = 0;

function siguienteMensaje() {
  document.getElementById("mensaje").innerText = mensajes[m];
  crearCorazon();
  m++;

  if (m >= mensajes.length) {
    document.getElementById("final").classList.remove("oculto");
  }
}

// --------------------
// ❤️ CORAZONES
// --------------------
function crearCorazon() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-20px";
  heart.style.fontSize = "20px";
  heart.style.animation = "fall 3s linear";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

document.body.addEventListener("click", crearCorazon);

// animación caída
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);

// --------------------
// 🎉 CONFETI
// --------------------
function confeti() {

  const canvas = document.getElementById("confeti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const piezas = [];

  for (let i = 0; i < 150; i++) {
    piezas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2
    });
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff4d6d";

    piezas.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += 2;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(animar);
  }

  animar();
}
