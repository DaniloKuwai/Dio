"use strict";
function somaValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somaValores(1, 2));
console.log(somaValores('ola', 'Tudo bem?'));
console.log(somaValores('1', 5));
