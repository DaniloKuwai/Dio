//Porquê utilizar Typescript
//Porquê na própria digitaçãoo do código, você já vai recebendo as mensagens de erro, por exemplo tipagem de váriaveis
//Porquê você não precisa rodar o programa todo para encontrar os erros
// Em um projeto grande vai demorar muito para achar erros, sendo que com typescript já é identificado os erros logo no ínicio, e ele já tem a tipagem de variáveis logo no ínicio.
//Ou Seja maior segurança no desenvolvimento.

//---------------------------------------------------------

/*No typescript, você sempre precisa tipar e declarar nos parâmetros de uma função todas as variáveis que estão sendo criadas, por exempo se eu criar uma let num eu tenho que
declarar o tipo dela e também declarar igual no parâmetros, segue um exemplo:


let button = document.getElementById('button')
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;


function adicionarNumero(num1:number,num2:number,devePrintar:boolean, frase:string){
    let resultado = num1 + num2
    if(devePrintar){
        console.log(frase + resultado)
    }
    return num1 + num2  
}

let devePrintar = true;
let frase = 'O valor é:'

if(button){
button.addEventListener('click',()=>{
    if(input1 && input2){
        console.log(adicionarNumero(Number(input1.value),Number(input2.value),devePrintar,frase))
    }
})
}

Podem observar que todas as minhas variáveis já estão tipadas, inclusive os meus inputs tenho que dizer que elas são do tipo HTMLInputElement
*/

//----------------------------------------------------------------------

/*
Nos meus objetos também não posso mudar o valor dos meus objetos, se eles foram iniciados como uma string, não posso colocar outro valor depois.

//-----------------------------------------------------------------------

*/

/*Lado negro do typescript:
por exemplo:

let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

ele aceita qualquer valor mesmo, tanto number,string e boolean conforme exemplo. Isso foge do propósito do typescript

*/

//------------------------------------------------------------------------

//Para trabalhar com 2 tipos de variáveis por exemplo podemos fazer dessa forma:

/*
function somaValores(input1:number | string,input2:number |string){
    if(typeof input1 === "string" || typeof input2 === 'string'){
        return input1.toString() + input2.toString()
    }else{
    return input1 + input2;
    }
}

//Porém dessa forma fica muito bagunçado o código, poderiamos também fazer dessa outra forma, tipando o input já e utilizando a variável no parâmetros

type input = number | string

function somaValores(input1: input , input2: input){
    if(typeof input1 === "string" || typeof input2 === 'string'){
        return input1.toString() + input2.toString()
    }else{
        return input1 + input2;
    }
}

console.log(somaValores(1,2));
console.log(somaValores('ola', 'Tudo bem?'));
console.log(somaValores('1',5));

//Também podemos proteger nosso código , tipando a função também que a função espera um valor numérico, para isso podemos fazer dessa forma:

function somaValores(input1: number, input2: number):number {
    return input1 + input2;
}

console.log(somaValores(1,3))

nesse caso se mesmo que nós errarmos por exemplo colocando um input2.toStrting() a função já vai ficar acusando erro, porquê tipamos ela para receber apenas numéricos
*/

//------------------------------------------------------------------

//Importância do arquivo tsconfig.json
//*-> Target -> o target define qual a versão do ECMA que vai ser compilado o código, por conta das versões do ECMA que podem estar nas máquinas de outros usuários que podem estar 
//com versões desatualizadas.

//*-> lib -> Posso definir, quais bibliotecas eu quero utilizar, por exemplo para utilizar um document no código colocamos dentro da lib["DOM"], estou dizendo que quero utilizar
//essa biblioteca

//*-> outDir -> Defini para onde os arquivos js que são criados automaticamente quando você gera um arquivo.ts vai, se eu colocar uma pasta dist, ele vai criar essa pasta e vai
//jogar os arquivos lá.

//*-> strict -> como true, ele valida todas as questões de tipagem e etc, quando deixa false ele não valida mais nada, sempre deixar como true.

//*-> rootDir -> Defini para onde os arquivos ts para onde vai

//*-> noImplicitAny -> Quando estiver true vai validar se estiver como any, quando estiver como false vai ignorar.

//*-> strictNullChecks -> Se for true, ele vai validar se a função pode ser nula(sem declaração) , se for false ele não vai validar a função e não vai cobrar tipagem