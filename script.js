var CLIENT_ID = '20280479489-c2cjulucpu4ck7lj32v74ou0753tsc1v.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDkF9VxxCVWUuIxYhqUnAWXcGWDsfd1hH4';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
var tokenClient;

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