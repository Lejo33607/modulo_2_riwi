
document.addEventListener("DOMContentLoaded", function () {
  const msgBienvenida = document.getElementById("bienvenida-msg");
  if (msgBienvenida) {
    setTimeout(function () {
      msgBienvenida.textContent = "👋 ¡Bienvenido a mi portafolio!";
    }, 500);
  }

  const btnCambiarTexto = document.getElementById("btn-cambiar");
  const heroParrafo     = document.getElementById("hero-parrafo");

  const textos = [
    "Bienvenido a mi portafolio. Aquí encontrarás mis proyectos, intereses y un poco sobre mí.",
    "¡Aquí aprendo, construyo y comparto! Explora mis secciones 🚀",
    "HTML · CSS · JavaScript: las herramientas con las que doy vida a mis ideas 💡",
  ];
  let indiceTexto = 0; 

  if (btnCambiarTexto && heroParrafo) {
    btnCambiarTexto.addEventListener("click", function () {
      indiceTexto = (indiceTexto + 1) % textos.length;
      heroParrafo.textContent = textos[indiceTexto];

      heroParrafo.style.opacity = "0";
      setTimeout(function () {
        heroParrafo.style.opacity = "1";
      }, 150);
    });
  }

  const btnToggle  = document.getElementById("btn-toggle");
  const infoExtra  = document.getElementById("info-extra");

  if (btnToggle && infoExtra) {
    btnToggle.addEventListener("click", function () {
      const estaVisible = infoExtra.style.display === "block";

      if (estaVisible) {       
        infoExtra.style.display = "none";
        btnToggle.textContent   = "📂 Ver más sobre mí";
      } else {
        infoExtra.style.display = "block";
        btnToggle.textContent   = "🔼 Ocultar";
      }
    });
  }
});
