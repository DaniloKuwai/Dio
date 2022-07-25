"use strict";
//método por inferência
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
//Com o enum Profissao, conseguimos definir os tipos de profissoes existentes em vez de ter que ficar sempre digitando tudo e podemos usar isso depois diretamente
//Igual exemploo abaixo
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Atriz
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.JogadoraDeFutebol,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(monica.materias);
