function somaValoresNumericos(numero1:number , numero2:number):number{
    return numero1 + numero2;
}

console.log(somaValoresNumericos(1,3));

//funções do tipo void é quando uma função não retorna nada, podemos criar uma função e para ela não retornar nada podemos deixar ela do tipo void quando não retorna valor.
function printValoresNumericos(numero1: number, numero2:number):void{
    console.log(numero1 + numero2)
}