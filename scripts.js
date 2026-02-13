document.getElementById('document-icon').onclick = function() {
    document.getElementById('modal').style.display = "block";
};

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

document.getElementById('cancel-button').onclick = function() {
    document.getElementById('modal').style.display = "none";
};



document.getElementById('ok-button').addEventListener('click', function() {
    const form = document.getElementById('selection-form');
    const urlParams = new URLSearchParams();

    // Itera sobre todas as checkboxes do formulário
    form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            // Adiciona os parâmetros à URL se a checkbox estiver marcada
            urlParams.append(checkbox.name, checkbox.value);
        }
    });

    // Redirecionar para documento.html com os parâmetros da URL em uma nova aba
    const url = `documento.html?${urlParams.toString()}`;
    window.open(url, '_blank');  // Abre em nova aba
});

function generateDocumentURL(paragraphs) {
    let url = 'documento.html?';
    paragraphs.forEach((paragraph, index) => {
        if (index > 0) {
            url += '&';
        }
        url += `paragrafo${paragraph}=${paragraph}`;
    });
    return url;
}
