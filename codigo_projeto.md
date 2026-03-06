# Projeto WebPageOclei

Documentação técnica gerada automaticamente.

Data de geração: 06/03/2026 10:54:51

---

## css\base.css

```css
/* Estilos básicos */

html, body {
height: 100%;
}

body {
    font-family: "Times New Roman", Times, serif;
    font-size: 13pt;
    color: #000;

    margin: 0;
    padding: 0;
    background-image: url("../img/fundo.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /*
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    */
}

body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.35);
    z-index: -1;
}

h1 {
    text-align: center;
    margin: 0 0 24px 0;
    font-size: 26pt;
    font-weight: bold;
}

#document-icon {
    cursor: pointer;
    font-size: 36px;
    margin: 20px;
}
#modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
#modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
} 

#seletor-bases {
display: flex;
justify-content: center;
gap: 40px;
margin-top: 60px;
}

.base-card {
width: 160px;
height: 140px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: rgba(255,255,255,0.85);
border-radius: 10px;

box-shadow: 0 4px 10px rgba(0,0,0,0.15);

cursor: pointer;

transition: transform 0.15s, box-shadow 0.15s;

}

.base-card:hover {
transform: translateY(-5px);
box-shadow: 0 8px 18px rgba(0,0,0,0.25);
}

.icone {
font-size: 46px;
margin-bottom: 10px;
}

.titulo-base {
font-size: 16pt;
font-weight: bold;
}
```

---

## css\documento.css

```css

.pagina {
width: 21cm;
min-height: 29.7cm;
margin: 2cm auto;
background: white;
padding-top: 2cm;
padding-bottom: 2cm;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
}

.brasao {
    width: 2.8cm;
    height: auto;
    display: block;
    margin: 0 auto 6px auto;
}
.cabecalho{
  text-align: center;
  margin-bottom: 1.2cm;
  padding-bottom: 0.5cm;
  border-bottom: 1px solid #000;
}

.cab-l1, .cab-l2, .cab-l3{
  font-weight: 700;
  font-size: 12pt;
  line-height: 1.2;
}

.cab-l4, .cab-l5{
  font-weight: 400;
  font-size: 10.5pt;
  line-height: 1.2;
}

#titulo{
  text-align: center;
  margin: 1.2cm 0 1.6cm 0;
}

.paragrafo {
    text-indent: 3cm;
    margin-top: 0.3cm;
    margin-bottom: 0;
    margin-left: 1cm;
    margin-right: 1cm;
    line-height: 150%;
    text-align: justify;
}

.data-local {
    text-indent: 3cm;
    margin-top: 0.3cm;
    margin-left: 1cm; /* mesmo recuo dos parágrafos */
    margin-right: 1cm;
    text-align: justify;
}

.assinatura {
    margin-top: 60px;
    text-align: center;
}

@media print{
  body{ background: white; }
  .pagina{
    box-shadow: none;
    margin: 0;
  }
}

```

---

## decisao.js

```javascript
// decisao.js

const intimar_reu = {
    rotulo: 'intimar_reu (decisao.js)',
    indice: 2,
    teor: `
        Após, intime-se o(a) Réu para eventual manifestação, no prazo dos 15 (quinze) dias.

        Decorrido o prazo acima, independentemente de manifestação, <i><b>{conclusao}</b></i> (sentenca.js), para fins de prosseguimento do processo.
    `
};

const lei_9099 = 'Lei nº 9.099/95';

```

---

## despacho.js

```javascript
// despacho.js

const intimar_autor = {
    rotulo: 'intimar_autor (despacho.js)',
    indice: 1,
    teor: `
        Intime-se o(a) Autor(a) para emendar a Inicial, no prazo dos 15 (quinze) dias previstos no art. 321 do {cpc}, sob pena de seu indeferimento, apresentando histórico dos pagamentos já realizados e planilha de cálculo com a demonstração dos valores que entende ter pago a maior.

        Afinal, o pedido deve ser certo e determinado (artigos 322 e 324, ambos do {cpc}). Além disso, no presente procedimento, não se admite a eventual condenação por quantia ilíquida (art. 38, parágrafo único, da {lei_9099}).
    `
};

const cpc = 'Código de Processo Civil – CPC';
const local = 'Barreitas/BA';
const usuario = 'Oclei Alves da Silva';
const funcao = 'JUIZ DE DIREITO';

```

---

## documento.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Documento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/documento.css">
</head>

<body>
    <div class="pagina" id="pagina">
        <div class="cabecalho" id="cabecalho">
            <img class="brasao" src="img/brasao_tjba.png" alt="Brasão TJBA">
            <div class="cab-l1">TRIBUNAL DE JUSTIÇA DO ESTADO DA BAHIA</div>
            <div class="cab-l2">PODER JUDICIÁRIO</div>
            <div class="cab-l3">COMARCA DE BARREIRAS</div>
            <div class="cab-l4">1ª VARA DO SISTEMA DOS JUIZADOS ESPECIAIS</div>
            <div class="cab-l5">ESCREVENDO COM ARTE</div>
        </div>

        <div id="titulo"></div>
        <div id="conteudo"></div>
        <div id="assinatura"></div>
    </div>

    <script type="module" src="js/documento.js"></script>
</body>
</html>
```

---

## index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head> <meta charset="UTF-8">
        <title>Escrevendo com Arte</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/base.css">
        <script src="https://accounts.google.com/gsi/client" async></script>
        <script src="https://apis.google.com/js/api.js"></script>
    </head>
    
    <body>
        <h1>BEM-VINDO AO ESCREVENDO COM ARTE</h1>
        <div class="base-card document-icon" data-base="civel">
            <div class="icone">📄</div>
            <div class="titulo-base">Cível</div>
        </div>
        
        <div class="base-card document-icon" data-base="criminal">
            <div class="icone">📄</div>
            <div class="titulo-base">Criminal</div>
        </div>

        <div class="base-card document-icon" data-base="eleitoral">
            <div class="icone">📄</div>
            <div class="titulo-base">Eleitoral</div>
        </div>
        
        <div id="modal">
            <div id="modal-content">
                <span class="close">&times;</span>
                <h2 id="modal-titulo">Selecione os parágrafos para inserir</h2>
                <form id="selection-form">
                    <div id="opcoes-container"></div>
                    <button type="button" id="ok-button">OK</button>
                    <button type="button" id="cancel-button">Cancelar</button>
                </form>
            </div>
        </div>
        
        <script src="scripts.js" defer></script>
    </body> </html>
```

---

## js\banco\civel.js

```javascript
/*
1000–1999: globais
2000–2999: cível
3000–3999: criminal
4000–4999: eleitoral
*/

export const variaveis = Object.freeze({
    intimar_autor: {
        indice: 2010,
        teor: `Intime-se o(a) Autor(a) para emendar a Inicial, no prazo dos 15 (quinze) dias previstos no art. 321 do {cpc}, sob pena de seu indeferimento, apresentando histórico dos pagamentos já realizados e planilha de cálculo com a demonstração dos valores que entende ter pago a maior. Afinal, o pedido deve ser certo e determinado (artigos 322 e 324, ambos do {cpc}). Além disso, no presente procedimento, não se admite a eventual condenação por quantia ilíquida (art. 38, parágrafo único, da {lei_9099}).`
    },

    intimar_reu: {
        indice: 2020,
        teor: `Após, intime-se o(a) Réu para eventual manifestação, no prazo dos 15 (quinze) dias. Decorrido o prazo acima, independentemente de manifestação, <i><b>{conclusao}</b></i>, para fins de prosseguimento do processo.`
    },

    paragrafo3: {
        indice: 2030,
        teor: `Este é o conteúdo do Parágrafo 3.`
    }

});
```

---

## js\banco\criminal.js

```javascript
/*
1000–1999: globais
2000–2999: cível
3000–3999: criminal
4000–4999: eleitoral
*/

import { constantes } from './global.js';
export { constantes };
export const variaveis = Object.freeze({

intimar_MP: {
indice: 3010,
teor: `Intime-se o Ministério Público para eventual apresentação de proposta de transação penal.`
},

designar_audiencia_preliminar: {
indice: 3020,
teor: `Apresentada proposta de transação penal, designe-se audiência preliminar, adotando-se as providências necessárias.`
},

conclusao_homologar_transacao: {
indice: 3030,
teor: `Obtida a transação penal e uma vez cumprida, promova-se a conclusão, para fins de homologação.`
}

});
```

---

## js\banco\eleitoral.js

```javascript
/*
1000–1999: globais
2000–2999: cível
3000–3999: criminal
4000–4999: eleitoral
*/
export const variaveis = Object.freeze({

intimar_MPE_alegacoes_finais: {
indice: 4010,
teor: `Intime-se o Ministério Público Eleitoral para apresentar alegações finais.`
},

intimar_impugnado_alegacoes_finais: {
indice: 4020,
teor: `Em seguida, intime-se o Impugnado, para a mesma finalidade.`
},

conclusao_julgamento_eleitoral: {
indice: 4030,
teor: `Após, promova-se a conclusão, para fins de julgamento.`
}

});
```

---

## js\banco\global.js

```javascript
/*
1000–1999: globais
2000–2999: cível
3000–3999: criminal
4000–4999: eleitoral
*/
export const variaveis = {};
export const constantes = Object.freeze({
    // Variáveis globais que serão usadas no conteúdo    
    local: 'Barreiras/BA',
    usuario: 'Oclei Alves da Silva',
    funcao: 'JUIZ DE DIREITO',
    cpc: 'Código de Processo Civil – CPC',
    lei_9099: 'Lei nº 9.099/95',
    conclusao: 'promova-se nova conclusão'
});

```

---

## js\documento.js

```javascript
"use strict";

const DEBUG = false;
function log(...args) { if (DEBUG) console.log(...args); }

function obterParamUrl(nome) {
const url = new URL(window.location.href);
return (url.searchParams.get(nome) || "").trim();
}

function normalizarListaCsv(valor) {
return valor
.split(",")
.map(s => s.trim())
.filter(Boolean);
}

function substituirPlaceholders(texto, constantes) {
if (!texto) return "";
let out = texto;

if (constantes && typeof constantes === "object") {
    for (const chave of Object.keys(constantes)) {
        const marcador = "{" + chave + "}";
        out = out.split(marcador).join(String(constantes[chave]));
    }
}
return out;

}

function montarParagrafosHtml(texto) {
const partes = texto
.replace(/\r\n/g, "\n")
.trim()
.split(/\n\s*\n/);

return partes
    .map(parte => `<p class="paragrafo">${parte.trim()}</p>`)
    .join("");

}

function ordenarPorIndice(itens) {
return itens.sort((a, b) => {
const ia = Number(a.indice ?? 0);
const ib = Number(b.indice ?? 0);
if (ia < ib) return -1;
if (ia > ib) return 1;
return 0;
});
}

function formatarDataPorExtenso(data) {
    const d = data.getDate();
    const mes = data.toLocaleString("pt-BR", { month: "long" });
    const ano = data.getFullYear();
    
    let diaFmt = "";
    if (d === 1) {
        diaFmt = "1º";
    } else if (d >= 2 && d <= 9) {
        diaFmt = String(d).padStart(2, "0");
    } else {
        diaFmt = String(d);
    }
    
    return `${diaFmt} de ${mes} de ${ano}`;
}

function montarBlocoAssinatura(constantes) {
const local = constantes.local || "Local";
const usuario = constantes.usuario || "";
const funcao = constantes.funcao || "";

const dataExtenso = formatarDataPorExtenso(new Date());

const htmlData = `<p class="data-local">${local}, ${dataExtenso}.</p>`;

const htmlAss = `
    <div class="assinatura">
        <p>${usuario}</p>
        <p>${funcao}</p>
    </div>
`.trim();

return htmlData + htmlAss;

}

function renderizarCorpo(html) {
const conteudo = document.getElementById("conteudo");
if (conteudo) conteudo.innerHTML = html;
}

function renderizarAssinatura(html) {
const assinatura = document.getElementById("assinatura");
if (assinatura) assinatura.innerHTML = html;
}

function renderizarErro(mensagem) {
const conteudo = document.getElementById("conteudo");
if (conteudo) conteudo.innerHTML = `<p class="paragrafo">ERRO: ${mensagem}</p>`;
}

async function carregarBancoPorBase(base) {
if (base === "civel") return await import("./banco/civel.js");
if (base === "crime" || base === "criminal") return await import("./banco/criminal.js");
if (base === "eleitoral") return await import("./banco/eleitoral.js");
return await import("./banco/civel.js");
}

(async function main() {
try {
const base = (obterParamUrl("base") || "civel").toLowerCase();
const selecoes = normalizarListaCsv(obterParamUrl("selecoes"));

    log("Base:", base);
    log("Seleções:", selecoes);

    const moduloGlobal = await import("./banco/global.js");
    const moduloBase = await carregarBancoPorBase(base);

    const constantes = Object.freeze({
        ...(moduloGlobal.constantes || {}),
        ...(moduloBase.constantes || {})
    });

    const variaveis = Object.freeze({
        ...(moduloGlobal.variaveis || {}),
        ...(moduloBase.variaveis || {})
    });

    const blocos = [];

    for (const chave of selecoes) {
        const item = variaveis[chave];
        if (!item) continue;

        const indice = item.indice ?? 0;
        const teor = item.teor ?? "";

        const teorSubst = substituirPlaceholders(teor, constantes);
        const html = montarParagrafosHtml(teorSubst);

        blocos.push({ indice, html });
    }

    const ordenados = ordenarPorIndice(blocos);
    const htmlCorpo = ordenados.map(x => x.html).join("");

    renderizarCorpo(htmlCorpo);
    renderizarAssinatura(montarBlocoAssinatura(constantes));
} catch (e) {
    console.error(e);
    renderizarErro(e && e.message ? e.message : String(e));
}

})();
```

---

## rascunho.html

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        function initClient() {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(function () {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                // Handle the initial sign-in state.
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                document.getElementById('authorize_button').style.display = 'block';
                document.getElementById('signout_button').style.display = 'block';
                document.getElementById('authorize_button').onclick = handleAuthClick;
                document.getElementById('signout_button').onclick = handleSignoutClick;
            }, function(error) {
                appendPre(JSON.stringify(error, null, 2));
            });
        }
                
    </body>
</html>

```

---

## scripts.js

```javascript
"use strict";

let baseAtual = "civel";

function $(sel) {
return document.querySelector(sel);
}

function abrirModal() {
const modal = $("#modal");
if (modal) modal.style.display = "block";
}

function fecharModal() {
const modal = $("#modal");
if (modal) modal.style.display = "none";
}

function mostrarErroNoModal(mensagem) {
const cont = $("#opcoes-container");
if (cont) cont.innerHTML = `<p>ERRO: ${mensagem}</p>`;
abrirModal();
}

function limparOpcoes() {
const cont = $("#opcoes-container");
if (cont) cont.innerHTML = "";
}

function ordenarChavesPorIndice(variaveis) {
return Object.keys(variaveis || {}).sort((a, b) => {
const ia = Number(variaveis[a]?.indice ?? 0);
const ib = Number(variaveis[b]?.indice ?? 0);
if (ia < ib) return -1;
if (ia > ib) return 1;
return 0;
});
}

function rotuloPadrao(chave) {
return chave
.replaceAll("_", " ")
.replace(/\b\w/g, (m) => m.toUpperCase());
}

async function importarBancoPorBase(base) {
if (base === "civel") return await import("./js/banco/civel.js");
if (base === "crime" || base === "criminal") return await import("./js/banco/criminal.js");
if (base === "eleitoral") return await import("./js/banco/eleitoral.js");
return await import("./js/banco/civel.js");
}

async function montarOpcoesDaBase(base) {
limparOpcoes();

const cont = $("#opcoes-container");
if (!cont) return;

const moduloBase = await importarBancoPorBase(base);
const variaveis = moduloBase.variaveis || {};

const chavesOrdenadas = ordenarChavesPorIndice(variaveis);

if (!chavesOrdenadas.length) {
    cont.innerHTML = "<p>Sem opções cadastradas para esta base.</p>";
    return;
}

for (const chave of chavesOrdenadas) {
    const item = variaveis[chave] || {};
    const labelTexto = item.rotulo || rotuloPadrao(chave);

    const id = "opt_" + base + "_" + chave;

    const linha = document.createElement("div");
    linha.className = "linha-opcao";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.name = "selecoes";
    input.value = chave;

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = labelTexto;

    linha.appendChild(input);
    linha.appendChild(label);

    cont.appendChild(linha);
}

}

function coletarSelecoesMarcadas() {
const marcados = Array.from(document.querySelectorAll('input[name="selecoes"]:checked'));
return marcados.map(x => x.value).filter(Boolean);
}

function abrirDocumento(base, selecoes) {
const csv = encodeURIComponent(selecoes.join(","));
const url = `documento.html?base=${encodeURIComponent(base)}&selecoes=${csv}`;
window.open(url, "_blank");
}

function configurarEventos() {
const cards = document.querySelectorAll(".base-card.document-icon");

if (!cards.length) {
    console.error("Nenhum card encontrado. Verifique as classes no HTML.");
    return;
}

cards.forEach(card => {
    card.addEventListener("click", async () => {
        try {
            baseAtual = (card.getAttribute("data-base") || "civel").toLowerCase();
            await montarOpcoesDaBase(baseAtual);
            abrirModal();
        } catch (e) {
            console.error(e);
            mostrarErroNoModal(e && e.message ? e.message : String(e));
        }
    });
});

const fechar = $(".close");
if (fechar) fechar.addEventListener("click", fecharModal);

const cancelar = $("#cancel-button");
if (cancelar) cancelar.addEventListener("click", fecharModal);

const ok = $("#ok-button");
if (ok) {
    ok.addEventListener("click", () => {
        const selecoes = coletarSelecoesMarcadas();
        fecharModal();
        if (!selecoes.length) return;
        abrirDocumento(baseAtual, selecoes);
    });
}

window.addEventListener("click", (e) => {
    const modal = $("#modal");
    if (modal && e.target === modal) fecharModal();
});

}

document.addEventListener("DOMContentLoaded", () => {
configurarEventos();
});
```

---

## sentenca.js

```javascript

```

---

## servidor.js

```javascript

```

---
