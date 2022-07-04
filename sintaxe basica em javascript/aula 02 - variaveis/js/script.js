//tipos primitivos

//boolean

var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string

var nome = 'diana';
console.log(typeof(nome));

//como declarar variáveis

var variavel = 'diana';
variavel = 'martine';
console.log(variavel)

//3 modos de declarar as variáveis

// var - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
// let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
// const - escopo local de bloco, somente leitura, o valor inicial é obrigatórioo e não pode ser alterado


let variavel2 = 'diana';
console.log(variavel2)

const constante = 2;
console.log(constante)

//escopo

//escopo global -> quando a variavel é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código
//escopo local -> quando a váriavel é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

var escopoglobal ='global';
console.log(escopoglobal)

function escopoLocal(){
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno)
}

escopoLocal();

