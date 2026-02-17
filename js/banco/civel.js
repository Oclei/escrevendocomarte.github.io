export const constantes = Object.freeze({
    // Variáveis globais que serão usadas no conteúdo
    cpc: 'Código de Processo Civil – CPC',
    lei_9099: 'Lei nº 9.099/95',
    conclusao: 'promova-se nova conclusão',
    local: 'Barreiras/BA',
    usuario: 'Oclei Alves da Silva',
    funcao: 'JUIZ DE DIREITO'
});

export const variaveis = Object.freeze ({
    intimar_autor: {
    teor:
    `Intime-se o(a) Autor(a) para emendar a Inicial, no prazo dos 15 (quinze) dias previstos no 
    art. 321 do {cpc}, sob pena de seu indeferimento, apresentando histórico dos pagamentos já 
    realizados e planilha de cálculo com a demonstração dos valores que entende ter pago a maior. 
    Afinal, o pedido deve ser certo e determinado (artigos 322 e 324, ambos do {cpc}). 
    Além disso, no presente procedimento, não se admite a eventual condenação por quantia ilíquida 
    (art. 38, parágrafo único, da {lei_9099}).`
    },

    intimar_reu: {
    teor:
    `Após, intime-se o(a) Réu para eventual manifestação, no prazo dos 15 (quinze) dias. 
    Decorrido o prazo acima, independentemente de manifestação, <i><b>{conclusao}</b></i>, 
    para fins de prosseguimento do processo.`
    },

    paragrafo3: {
        teor:
        "Este é o conteúdo do Parágrafo 3."
    }

});


