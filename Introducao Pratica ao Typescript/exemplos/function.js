"use strict";
//Podemos implementar tipos como callback também para ele retornar para nós o que nós quisermos
function somaValoresNumericosEtratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericosEtratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosEtratar(1, 3, dividirPorEleMesmo));
