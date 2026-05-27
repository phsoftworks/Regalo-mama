// abrir regalo
function abrirRegalo() {
  document.getElementById("contenido").classList.remove("oculto");

  document.getElementById("musica").play();

  lanzarConfeti();
}

// corazones flotantes
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(crearCorazon, 300);

// confeti simple
function lanzarConfeti() {
  const canvas = document.getElementById("confeti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 150
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff4d6d";

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      ctx.fill();

      p.y += Math.random() * 5;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
}
