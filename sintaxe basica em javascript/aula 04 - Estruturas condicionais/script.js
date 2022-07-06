var jogador1 = 1;
var jogador2 = 0;
var placar;

if(jogador1 != -1){
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto')
    placar = jogador1 > jogador2
}else if(jogador2 > 0){
    console.log('Jogador 2 marcou ponto')
    placar = jogador2 > jogador1
}else{
    console.log('Ninguem marcou ponto')
}
}



//if ternário
console.log('If ternário')
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos')


//switch case
console.log('Switch case')

switch(placar){
    case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou');
    break;
    
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou')
    break;

    default:
    console.log('Ninguem venceu')
}

//for->for executa uma instrução até que ela seja falsa

console.log('For')

let array = ['valor 1','valor 2','valor 3','valor 4','valor 5',]

let object = {propriedade1: 'valor1',propriedade2:'valor2',propriedade3:'valor3'}



for(let indice = 0; indice < array.length; indice ++){
    console.log(indice)
}

//for in -> Funciona como uma repetição a partir de uma propriedade

console.log('For in')
for(let i in array){
    console.log(i)
}

for(i in object){
    console.log(i)
}

//for of -> Funciona como uma repetição a partir de um valor

console.log('For of')

for(i of array){
    console.log(i)
}

for(i of object.propriedade1){
    console.log(i)
}

//while

console.log('while')

var a = 0;
while(a < 10){
    a++
    console.log(a)
}

//do while

console.log('do while')

b = 0

do {
    b++
    console.log(b)
}while(b < 10)

