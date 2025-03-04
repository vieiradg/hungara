document.querySelectorAll(".pedido").forEach(botao => {
    botao.addEventListener("click", function() {
        let item = this.getAttribute("data-item");
        let numeroWhatsApp = "+5521966207951"; // Substituir pelo número real
        let mensagem = `Olá, quero pedir um ${item}!`;
        let link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(link, "_blank");
    });
});