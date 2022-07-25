"use strict";
function jogarErro(erro, codigo) {
    throw {
        error: erro,
        code: codigo
    };
}
jogarErro('deu erro', 500);
//porém qual é o tipo de um throw que retorna um erro, seria um void? que não retorna nada, na verdade ele é to tipo never, e podemos colocar isso na função tipando ela como never
// o never é um código que nunca finalizou, quando é iterrompido.
