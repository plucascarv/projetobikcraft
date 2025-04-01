const form = document.querySelector('form');

function sentForm(response) {
    if (response.ok) {
        form.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em até 24 horas.</p>"
    } else {
        form.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email: contato@bikcraft.com</p>"
    }
}

function sendForm(event) {
    event.preventDefault();
    const button = document.querySelector('form button');
    button.disabled;
    button.innerText = "Enviando..."
    const data = new FormData(form);

    fetch('./enviar.php', {
        method: 'POST',
        body: data,
    }).then(sentForm);
}

form.addEventListener('submit', sendForm);