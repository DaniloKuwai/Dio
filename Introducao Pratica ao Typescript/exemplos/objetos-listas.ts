//método por inferência

const pessoa ={
     nome:'Mariana',
     idade: 28,
     profissao: 'Desenvolvedora'
}

pessoa.idade = 25;

const andre:{nome:string,idade:number,profissao:string}={
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula:{nome:string,idade:number,profissao:string}={
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

//Com o enum Profissao, conseguimos definir os tipos de profissoes existentes em vez de ter que ficar sempre digitando tudo e podemos usar isso depois diretamente
//Igual exemploo abaixo

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}


//Podemos criar uma interface para não precisar ficar tipando os objetos
//Podemos falar para o typescript que um parâmetro não é mais obrigatório, colocando o sinal de interrogação no final
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}
//Podemos criar uma interface também para herdar objetos de outras classes,vamos a um exemplo no método jessica
interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa ={
    nome:'Vanessa',
    idade:23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa ={
    nome:'Maria',
    idade:23,
    profissao: Profissao.Atriz
}

const jessica: Estudante = {
    nome:'Jessica',
    idade: 28,
    profissao: Profissao.JogadoraDeFutebol,
    materias: ['Matemática discreta','programação']
}

const monica: Estudante = {
    nome:'Jessica',
    idade: 28,
    materias: ['Matemática discreta','programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('-',item);
    }
}

listar(monica.materias)