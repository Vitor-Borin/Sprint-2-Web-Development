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
