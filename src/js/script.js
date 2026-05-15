const nomeSite = "MOBIX";
const versao = "1.0";

const imagens = [
    "src/assets/img1.png",
    "src/assets/img2.png",
    "src/assets/img3.png"
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
    const msg = `Voce esta conhecendo o FLOW no site ${nomeSite}!`;
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


const formContato = document.querySelector("form");

formContato.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const mensagem = document.querySelector("textarea").value.trim();

    if (nome === "" || email === "") {
        alert("Por favor, preencha nome e email!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email invalido! Verifique o formato.");
        return;
    }

    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    alert(`Obrigado, ${nomeFormatado}! Sua mensagem foi enviada com sucesso.`);
    formContato.reset();
});


function criarModalLogin() {
    const overlay = document.createElement("div");
    overlay.id = "login-overlay";
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85); display: flex;
        justify-content: center; align-items: center; z-index: 9999;
    `;

    const modal = document.createElement("div");
    modal.style.cssText = `
        background: #1a1a2e; padding: 40px; border-radius: 12px;
        width: 320px; text-align: center;
    `;

    const titulo = `Login ${nomeSite}`;

    modal.innerHTML = `
        <h2 style="color:#fff; margin-bottom:20px; font-size:22px;">${titulo}</h2>
        <input id="login-usuario" type="text" placeholder="Usuario"
            style="display:block;width:100%;padding:10px;margin-bottom:10px;
                   border-radius:8px;border:none;box-sizing:border-box;">
        <input id="login-senha" type="password" placeholder="Senha"
            style="display:block;width:100%;padding:10px;margin-bottom:15px;
                   border-radius:8px;border:none;box-sizing:border-box;">
        <button id="btn-entrar"
            style="width:100%;padding:12px;background:#6c63ff;color:#fff;
                   border:none;border-radius:8px;cursor:pointer;font-size:16px;margin-bottom:8px;">
            Entrar
        </button>
        <button id="btn-fechar"
            style="width:100%;padding:8px;background:transparent;color:#aaa;border:none;cursor:pointer;">
            Cancelar
        </button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const USUARIO_VALIDO = "aluno";
    const SENHA_VALIDA = "mobix123";

    document.getElementById("btn-entrar").addEventListener("click", () => {
        const usuario = document.getElementById("login-usuario").value.trim().toLowerCase();
        const senha = document.getElementById("login-senha").value;

        if (usuario === "" || senha === "") {
            alert("Preencha usuario e senha!");
            return;
        }

        if (usuario === USUARIO_VALIDO && senha === SENHA_VALIDA) {
            alert(`Bem-vindo, ${usuario.toUpperCase()}! Login feito com sucesso.`);
            document.body.removeChild(overlay);
        } else {
            alert("Usuario ou senha incorretos. Tente novamente!");
        }
    });

    document.getElementById("btn-fechar").addEventListener("click", () => {
        document.body.removeChild(overlay);
    });
}

const btnLogin = document.createElement("button");
btnLogin.textContent = "Login";
btnLogin.style.cssText = `
    padding: 8px 16px; background: #6c63ff; color: #fff;
    border: none; border-radius: 8px; cursor: pointer; font-weight: bold;
`;
btnLogin.addEventListener("click", criarModalLogin);
document.querySelector(".navbar").appendChild(btnLogin);


const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
    let secaoAtual = "";

    secoes.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) {
            secaoAtual = sec.getAttribute("id");
        }
    });

    linksMenu.forEach(link => {
        link.classList.remove("ativo");
        if (link.getAttribute("href") === `#${secaoAtual}`) {
            link.classList.add("ativo");
        }
    });
});


let promptExibido = false;

window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY + window.innerHeight;
    const alturaTotal = document.body.scrollHeight;

    if (!promptExibido && scrollAtual >= alturaTotal - 50) {
        promptExibido = true;

        const resposta = prompt(
            `Voce chegou ao final do ${nomeSite} v${versao}!\nO que achou do site? (otimo / bom / ruim)`
        );

        if (resposta === null) return;

        const respostaFormatada = resposta.trim().toLowerCase();

        if (respostaFormatada === "otimo") {
            alert("Que incrivel! Fico feliz que curtiu.");
        } else if (respostaFormatada === "bom") {
            alert("Obrigado! Vamos continuar melhorando.");
        } else if (respostaFormatada === "ruim") {
            alert("Seu feedback e importante pra gente melhorar.");
        } else {
            alert(`Resposta "${resposta}" nao reconhecida, mas valeu pela interacao!`);
        }
    }
});
