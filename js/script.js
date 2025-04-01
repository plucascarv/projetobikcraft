// Menu Ativo
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    if (location.href.includes(link.href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// Ativar Itens Orçamento
const params = new URLSearchParams(location.search);

function ativarProduto(param) {
    const element = document.getElementById(param);
    if (element) {
    element.checked = true;
    }
}

params.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const control = pergunta.getAttribute("aria-controls");
    const answer = document.getElementById(control);
    answer.classList.toggle('ativa');
    const active = answer.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', active);
}

function eventoPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// Galeria Imagens
const gallery = document.querySelectorAll(".bike-img img");
const galleryContainer = document.querySelector(".bike-img");

function trocarIMG(event) {
    const atual = event.currentTarget;
    if (matchMedia("(min-width: 1000px").matches) {
        galleryContainer.prepend(atual)
    }
}

function eventoGallery(img) {
    img.addEventListener('click', trocarIMG);
}

gallery.forEach(eventoGallery);