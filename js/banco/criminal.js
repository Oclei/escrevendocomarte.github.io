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