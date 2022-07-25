"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
stringTeste2() = unknownValor;
//O unknown não é igual o any, podemos utilizar ele para fazer testes quando não temos ideia do que está vindo de valor, podemos utilizar ele dentro de um if
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
    //se ele entrar no if, sabemos então que ele é do tipo string que estamoos recebendo, por isso a importância do unknown}
//se ele entrar no if, sabemos então que ele é do tipo string que estamoos recebendo, por isso a importância do unknown
