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