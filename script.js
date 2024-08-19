var CLIENT_ID = '20280479489-c2cjulucpu4ck7lj32v74ou0753tsc1v.apps.googleusercontent.com';
//var CLIENT_ID = 'just-rhythm-431117-i2';


//"client_id": "113950500912407040837",
//var CLIENT_ID = '113950500912407040837';
//var CLIENT_ID = '20280479489-c2cjulucpu4ck7lj32v74ou0753tsc1v';
//var CLIENT_ID = '20280479489-c2cjulucpu4ck7lj32v74ou0753tsc1v';
var API_KEY = 'AIzaSyDkF9VxxCVWUuIxYhqUnAWXcGWDsfd1hH4';
var API_KEY = 'AIzaSyC2dgj6ECs5kvqYxLWX6av38-nnOHb3F60';
var API_KEY = 'a0722507985af5e52a33f8fa4b1a34f9b08deb20';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
//var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
var SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
var tokenClient;

document.getElementById('login-button').onclick = function() {
    google.accounts.id.prompt();  // Mostrar a janela de login do Google
};

window.onload = function () {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
  };
  

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    initializeGapiClient(response.credential);
}

async function initializeGapiClient(id_token) {
    await gapi.load('client:auth2', async () => {
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
        });

        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.setToken({id_token: id_token});

        await listFiles();
    });
}

async function listFiles() {
    let response;
    try {
        response = await gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name)",
        });
    } catch (err) {
        document.getElementById('content').innerText = err.message;
        return;
    }
    const files = response.result.files;
    if (!files || files.length == 0) {
        document.getElementById('content').innerText = 'No files found.';
        return;
    }
    const output = files.reduce(
        (str, file) => `${str}${file.name} (${file.id})\n`,
        'Files:\n');
    document.getElementById('content').innerText = output;
}

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