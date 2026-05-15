// ===== SLIDESHOW =====
const imagens = [
    "src/assets/img1.png",
    "src/assets/img1.png", // pode duplicar ou trocar depois
    "src/assets/img1.png"
];

let index = 0;
const img = document.querySelector(".hero-image img");

function trocarImagem() {
    index++;
    if (index >= imagens.length) {
        index = 0;
    }
    img.src = imagens[index];
}

// troca a cada 3 segundos
setInterval(trocarImagem, 3000);


// ===== EVENTO DE CLIQUE =====
const botao = document.querySelector(".hero-text button");

botao.addEventListener("click", () => {
    alert("Você está conhecendo o FLOW 🚀");
});


// ===== FORMULÁRIO =====
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const mensagem = document.querySelector("textarea").value;

    // validação simples
    if (nome === "" || email === "") {
        alert("Preencha nome e email!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido!");
        return;
    }

    alert(`Obrigado ${nome}! Sua mensagem foi enviada 🚀`);

    form.reset();
});


// ===== PROMPT (extra) =====
setTimeout(() => {
    const resposta = prompt("Você está gostando do site? (sim/não)");

    if (resposta === "sim") {
        alert("Que bom! 😄");
    } else if (resposta === "não") {
        alert("Vamos melhorar! 💡");
    }
}, 5000);