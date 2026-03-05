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
    const dia = data.getDate();
    const mes = data.toLocaleString("pt-BR", { month: "long" });
    const ano = data.getFullYear();
    return `${dia} de ${mes} de ${ano}`;
}

function montarBlocoFinal(constantes) {
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

function renderizar(html) {
    const conteudo = document.getElementById("conteudo");
    if (conteudo) conteudo.innerHTML = html;
}

async function carregarBancoPorBase(base) {
    if (base === "civel") return await import("./banco/civel.js");
    if (base === "crime") return await import("./banco/crime.js");
    if (base === "eleitoral") return await import("./banco/eleitoral.js");
    return await import("./banco/civel.js");
}

(async function main() {
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

    const htmlFinal = htmlCorpo + montarBlocoFinal(constantes);

    renderizar(htmlFinal);
})();