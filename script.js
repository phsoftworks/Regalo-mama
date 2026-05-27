function verificar() {

  const valor = document.getElementById("clave").value.toLowerCase();

  // 🔐 CONTRASEÑA (PUEDES CAMBIARLA AQUÍ)
  const contraseña = "9/8/2012";

  if (valor === contraseña) {

    document.getElementById("bloqueo").style.display = "none";
    document.getElementById("contenido").classList.remove("oculto");

    document.getElementById("musica").play();

    confeti();

  } else {
    document.getElementById("error").innerText =
      "Mmm... piensa en un momento muy especial de tu vida ❤️";
  }
}

/* confeti simple */
function confeti() {

  const canvas = document.getElementById("confeti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const piezas = [];

  for (let i = 0; i < 120; i++) {
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
