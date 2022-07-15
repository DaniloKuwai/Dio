let array = []

/*Para adicionar valor no array*/

array.push(2)

/*Para tirar valor no array*/

array.pop(2)

/*Para tirar valor no final do array*/

array.shift()

/*Para adicionar no começo do array*/

array.unshift(1)

/*Iterabilidade -> percorrer o array*/

for(let i = 0;array.length; i++){
    console.log(array[i])
}

/*Para ver se existe um número ou algum valor no meu array*/

array.includes("o valor buscado")

/*Saber se todos os meus valores são iguais a 5*/

array.every(item => item === 5)

/*Saber se algum dos meus valores são iguais a 5*/

array.some(item => item === 5)

/*Reverter ordem do array*/

array.reverse()
