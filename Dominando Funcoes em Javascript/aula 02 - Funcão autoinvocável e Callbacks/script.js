//Função autoinvocável é muito conhecida também pelo IIFE(Immediately invoked function Expression)
// Uma função anonima entre parenteses, seguida por outro par de parenteses, que representa sua chamada

//exemplo:

(
    function(){
        let name = "Digital Innovation One"
        return name;
    }
)();

//resultado Digittal Innovation One
//já está sendo executada automaticamente

//----------------------------------------------------------

//outro exemplo recebendo parâmetros:

(
    function(a,b){
        return a+b;
    }    
)(1,2);

//resultado 3

//Outro exemplo:

const soma3 = (
    function(){
        return a + b;
    }
)(1,2);

console.log(soma3)//3


//-----------------------------------------------------------

//Funções de callbacks

//Nada mais é que uma função passada como argumento para outra

//Segue um exemplo:

const calc = function(operacao,num1,num2){
    return operacao(num1,num2);
}

const soma = function(num1,num2){
    return num1 + num2;
}

const sub = function(num1,num2){
    return num1 - num2;
}

const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,2);

console.log(resultSub)//-1
console.loog(resultSoma); // 3
