const nomeSite = "MOBIX";
const versao = "1.0";

const imagens = [
    "src/assets/img1.png",
    "src/assets/img1.png",
    "src/assets/img1.png"
];

let indiceImagem = 0;
const imgSlide = document.querySelector(".hero-image img");

function trocarImagem() {
    indiceImagem++;
    if (indiceImagem >= imagens.length) {
        indiceImagem = 0;
    }
    imgSlide.src = imagens[indiceImagem];
}

setInterval(trocarImagem, 3000);


const botaoHero = document.querySelector(".hero-text button");

botaoHero.addEventListener("click", () => {
    const msg = `Você está conhecendo o FLOW no site ${nomeSite} 🚀`;
    alert(msg);
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.style.background = "#0a0a1a";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
});
