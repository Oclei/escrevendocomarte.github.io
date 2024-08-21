document.getElementById('document-icon').onclick = function() {
    document.getElementById('modal').style.display = "block";
};

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

document.getElementById('cancel-button').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

document.getElementById('ok-button').onclick = function() {
    const checkboxes = document.querySelectorAll('#selection-form input[type="checkbox"]:checked');
    let selectedParagraphs = [];
    
    checkboxes.forEach((checkbox) => {
        selectedParagraphs.push(checkbox.value);
    });

    if (selectedParagraphs.length > 0) {
        const url = generateDocumentURL(selectedParagraphs);
        window.open(url, '_blank');
    }

    document.getElementById('modal').style.display = "none";
};

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
