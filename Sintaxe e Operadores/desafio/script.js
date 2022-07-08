
/* Função com operador ternário
function comparaNumeros(num1,num2){
    const saoIguais = num1 === num2;
    const soma = num1 + num2;
    
    return saoIguais ? "São iguais" : "Não são iguais";
}
*/

function comparaNumeros(num1,num2){
    const primeraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);


    return `${primeraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';
    if(num1 !== num2){
        saoIguais = 'Não são iguais'
    }


    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};


function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;


    let resutaldo10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(1,2))