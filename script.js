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
});