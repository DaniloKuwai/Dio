//o valor padrão no Antes do ECMA script ES2015 tinhamos que atribuir o valor que nós queriamos quando não era definido dessa forma:

function exponencial(array,num){
    if(num === undefined){
        num = 1;
    }

const result = [];

for(let i= 0; i<array.length;i++){
    result.push(array[i] ** num);
}

return result;

}

exponencial([1,2,3,4])

//[1,2,3,4]

exponencial([1,2,3,4],4)
//[1,8,27,64]

//Após o ES2015:

function exponencial(array,num=1){
    const result = [];

    for(let i = 0;i<array.length;i++){
        result.push[array[i] ** num];
    }

    return result;
}

exponencial([1,2,3,4])
//[1,2,3,4]

exponencial([1,2,3,4],4)
//[1,8,27,64]

//------------------------------------------------------

//Objeto "Arguments"

//Um array com todos os parâmetros passando quando a função foi invocada

function findMax(){
    let max = -Infinity;

    //o objeto arguments é utilizado quando não é definido um parâmetro ou a quantidade de valores a serem recebidos
    //ai utilizamos o arguments que pega todos os valores passados no caso.
    for(let i=0;i<arguments.length;i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

//caso nós setarmos de exemplo todos esses argumentos findMax(1,2,3,6,90,1) o resultado seria:
//90 para ver qual é o maior número de todos os argumentos passados