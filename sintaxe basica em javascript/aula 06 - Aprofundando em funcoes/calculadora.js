function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2-subtração (-)\n 3-multiplicação(*)\n 4-divisão(/)\n 5-Divisão inteira(%)\n 6- Potenciação(**)')

    if(!operacao || operacao > 7){
        alert('Digite uma opção válida')
        calculadora()
    }else{
        
    

let n1 = Number(prompt('Insira o primeiro valor'))
let n2 = Number(prompt('Insira o segundo valor'))
let resultado = 0;

if(!n1 || !n2){
    alert('Erro - Parâmetros inválidos, digite um número')
    calculadora()
}

function soma(){
    resultado = n1 + n2
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao()
}

function subtracao(){
    resultado = n1 - n2
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao()
}

function multiplicacao(){
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao()
}

function divisao(){
    resultado = n1 / n2
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao()
}

function divisaoint(){
    resultado = n1 % n2
    alert(`O resto da divisão entre ${n1} % ${n2} = ${resultado}`)
    novaOperacao()
}

function potenciacao(){
    resultado = n1 ** n2
    alert(`${n1} elevado a ${n2} é igual a = ${resultado}`)
    novaOperacao()
}

function novaOperacao(){
    let opcao = prompt('Deseja fazer outra operação \n 1- Sim \n 2-Não')
    
    if(opcao ==1){
        calculadora()
    }else if(opcao ==2){
        alert('Até mais')
    }else{
        alert('Digita uma opção válida')
        novaOperacao()
    }
}


if(operacao == 1){
    soma()
}else if(operacao == 2){
    subtracao()
}else if(operacao == 3){
    multiplicacao()
}else if(operacao == 4){
    divisao()
}else if(operacao == 5){
    divisaoint()
}else if(operacao == 6){
    potenciacao()
}
}

}

calculadora()