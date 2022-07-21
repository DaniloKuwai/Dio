//tratamento de erros

function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'object') throw new TypeError("Array precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError('Tamanho inválido!');

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um referenceError!")
            console.log(e.message)
        }else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado:"+ e);
        }
    }
}

//testando os erros
//sem enviar os parâmetros para cair no reference error
console.log(validaArray());
//mandando parâmetros errados, a função espera um array e um numérico, vamos mandar 2 numéricos para testar o typeerror
console.log(validaArray(5,5));
//testando o tipo array e em vez de número uma string para cair no erro tipo number
console.log(validaArray([],'a'));
//Testando o rangeError, para testar o tamanho do array, colocando o array vazio com tamanho de 5, o certo seria colocar 5 elementos por exemplo [1,2,3,4,5]
console.log(validaArray([1,2,3],5));
