const TELEFONE_WHATSAPP = "5511999999999";

function abrirWhatsApp(servico) {
  const texto = `Olá! Gostaria de solicitar um orçamento para: ${servico}.`;
  const url = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const botoes = document.querySelectorAll("[data-servico]");
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const servico = botao.getAttribute("data-servico");
    abrirWhatsApp(servico);
  });

  const slides = document.querySelectorAll(".slide");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");
const containerIndicadores = document.getElementById("carrossel-indicadores");

let indiceAtual = 0;

function criarIndicadores() {
  if (!containerIndicadores || slides.length === 0) return;

  // Limpa qualquer bolinha antiga antes de criar exatamente 1 por slide
  containerIndicadores.innerHTML = "";

  slides.forEach((_, index) => {
    const ponto = document.createElement("button");
    ponto.type = "button";
    ponto.classList.add("ponto-indicador");
    ponto.setAttribute("aria-label", `Ir para foto ${index + 1}`);
    ponto.addEventListener("click", () => mostrarSlide(index));
    containerIndicadores.appendChild(ponto);
  });
}

function mostrarSlide(index) {
  if (slides.length === 0) return;

  indiceAtual = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("ativo", i === indiceAtual);
  });

  const pontos = containerIndicadores
    ? containerIndicadores.querySelectorAll(".ponto-indicador")
    : [];

  pontos.forEach((ponto, i) => {
    ponto.classList.toggle("ativo", i === indiceAtual);
  });
}

if (btnAnterior && btnProximo) {
  btnAnterior.addEventListener("click", () => mostrarSlide(indiceAtual - 1));
  btnProximo.addEventListener("click", () => mostrarSlide(indiceAtual + 1));
}

criarIndicadores();
mostrarSlide(0);
});