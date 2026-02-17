import { constantes, variaveis } from './banco/civel.js';

const DEBUG = false;

function log(...args) {
  if (DEBUG) console.log(...args);
}

function substituirPlaceholders(texto) {
  if (typeof texto !== 'string') return '';
  return texto.replace(/{([a-zA-Z0-9_]+)}/g, (marcadorCompleto, nome) => {
  return Object.prototype.hasOwnProperty.call(constantes, nome)
  ? String(constantes[nome])
  : marcadorCompleto;
  }); 
}

function montarParagrafoHtml(texto) {
  const partes = texto
  .replace(/\r\n/g, '\n')
  .trim()
  .split(/\n\s*\n/);

  return partes
  .map(parte => `<p class="paragrafo">${parte.trim()}</p>`)
  .join('');
}

function montarAssinaturaHtml() {
  const dataAtual = new Date().toLocaleDateString(
  'pt-BR',
  { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return `
  <p class="data-local">${constantes.local}, ${dataAtual}.</p>

  <div class="assinatura">
    <div class="assinatura-nome">${constantes.usuario}</div>
    <div class="assinatura-cargo">${constantes.funcao}</div>
  </div>
`;
}

function gerarDocumento() {
const urlParams = new URLSearchParams(window.location.search);

const contentDiv = document.getElementById('content');
if (!contentDiv) return;

const ato = (urlParams.get('ato') || 'DOCUMENTO').toUpperCase();
const h1 = document.getElementById('titulo');
if (h1) h1.textContent = ato;
document.title = ato;

log('Parâmetros capturados:', Array.from(urlParams.entries()));

let documento = '';

urlParams.forEach((value, key) => {
if (key === 'ato') return;

if (variaveis[key]) {
  let texto = variaveis[key].teor;
  texto = substituirPlaceholders(texto);
  documento += montarParagrafoHtml(texto);
} else {
  log(`Chave não encontrada: ${key}`);
}


});

documento += montarAssinaturaHtml();
contentDiv.innerHTML = documento;
}

window.addEventListener('DOMContentLoaded', gerarDocumento);