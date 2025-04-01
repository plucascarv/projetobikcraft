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