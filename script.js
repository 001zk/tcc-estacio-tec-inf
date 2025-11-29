// contador animado
const contador = document.getElementById("contador");
let count = 0;
const target = 5; // quantidade de componentes reaproveitados

function animarContador() {
  if (count < target) {
    count++;
    contador.textContent = count;
    setTimeout(animarContador, 400);
  }
}
animarContador();

// efeito fade ao rolar
const elements = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("active");
  });
});

// gradiente dinâmico de fundo
const body = document.body;
let hue = 180;
function animarGradiente() {
  hue += 0.5;
  body.style.background = `linear-gradient(180deg, hsl(${hue}, 50%, 15%), hsl(${hue + 60}, 50%, 20%), hsl(${hue + 120}, 50%, 25%))`;
  requestAnimationFrame(animarGradiente);
}
animarGradiente();

// scroll suave
documePnt.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// botão voltar ao topo
const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) btnTopo.style.display = "block";
  else btnTopo.style.display = "none";
});
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
