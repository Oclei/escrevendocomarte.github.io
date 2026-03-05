"use strict";

let baseSelecionada = null;

function abrirModalParaBase(base) {
    baseSelecionada = base;

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");

    if (titulo) {
        const nome = base === "civel" ? "Cível" : (base === "crime" ? "Criminal" : "Eleitoral");
        titulo.textContent = "Selecione os parágrafos para inserir (" + nome + ")";
    }

    modal.style.display = "block";
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function coletarSelecoes() {
    const form = document.getElementById("selection-form");
    const selecionados = [];
    const inputs = form.querySelectorAll("input[type='checkbox']");

    inputs.forEach((ck) => {
        if (ck.checked) selecionados.push(ck.name);
    });

    return selecionados;
}

function abrirDocumentoEmNovaAba(base, selecoes) {
    const params = new URLSearchParams();
    params.set("base", base);
    params.set("selecoes", selecoes.join(","));

    const url = "documento.html?" + params.toString();
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    const icones = document.querySelectorAll(".document-icon");
    icones.forEach((el) => {
        el.addEventListener("click", () => {
            const base = el.getAttribute("data-base");
            abrirModalParaBase(base);
        });
    });

    const btnOk = document.getElementById("ok-button");
    const btnCancel = document.getElementById("cancel-button");
    const btnClose = document.querySelector("#modal-content .close");

    btnOk.addEventListener("click", () => {
        if (!baseSelecionada) return;

        const selecoes = coletarSelecoes();
        fecharModal();

        if (selecoes.length === 0) return;

        abrirDocumentoEmNovaAba(baseSelecionada, selecoes);
    });

    btnCancel.addEventListener("click", () => {
        fecharModal();
    });

    btnClose.addEventListener("click", () => {
        fecharModal();
    });

    window.addEventListener("click", (event) => {
        const modal = document.getElementById("modal");
        if (event.target === modal) fecharModal();
    });
});