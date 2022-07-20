//for -> Loop dentro de elementos iteráveis(arrays,string).
//exemplo:

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i=0 ; i<arr.lenght; i++){
        multiplicados.push(arr[i]*2);
    }

    return multiplicados;
}

const meusNumeros = [2,33,456,356,40];

multiplicaPorDois(meusNumeros);
// [4,66,912,712,80]

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//for in -> Loop entre propriedades enumeráveis de um objeto
//exemplo:

function forInExemplo(obj){
    for(prop in obj){
        //o prop equivale a cada propriedade do objeto,serve para objetos
        console.log(prop);
    }
}

const meuObjeto = {
    nome:"João",
    idade:"20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
//Nome
//Idade
//Cidade

//para acessar as propriedades, alteramos o console.log(prop) para console.log(obj[prop])


//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//for of -> Loop entre estruturas iteráveis(arrays,strings)

//exemplo:

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra)
//a
//b
//a
//c
//a
//x
//i

//exemplo com números:

function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30,20,233,2];

logNumeros(nums)
//30
//20
//233
//2


//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//while

function exemploWhile(){
    let num = 0

    while(num <=5){
        console.log(num);
        num++;
    }
}

exemploWhile()
//0
//1
//2
//3
//4
//5

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Do While -> Sempre executa pelo menos uma vez

//exemplo:

function exemploDoWhile(){
    let num = 0;

    do{
        console.log(num);
        num++;
    }while(num <=5)
}

exemploDoWhile()
//0
//1
//2
//3
//4
//5


