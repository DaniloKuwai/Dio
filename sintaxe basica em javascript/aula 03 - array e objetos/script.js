//array

console.log('--------------------')

let array = ['string',1,true];

console.log(array)

console.log('--------------------')

let array2 = ['string',1,true,['array1'],['array3'],['array4'],['array5'],['array6']]
console.log(array2[3])

console.log('--------------------')

//formas de manipular um array

/*
forEach() - itera um array;(percorre)
push() - add item no final do array;
pop() - remove item no final do array;
shift() - remove item no ínicio do array;
unshift() - add item no ínicio do array;
indexOf() - retorna o índice de um valor;
splice() - remove ou substitui um item pelo índice;
slice() - retorna uma parte de um array existente;
*/ 


//forEach

console.log('foreach')

array.forEach(function(item,index){console.log(item,index)})

console.log('push')

//push
array.push('novo item');
console.log(array)

console.log('pop')

array.pop();
console.log(array)

console.log('shift')
array.shift()
console.log(array)

console.log('unshift')
array.unshift('Item no inicio do array')
console.log(array)

console.log('unshift')
console.log(array.indexOf(true))

console.log('splice')
array.splice(0,3)
console.log(array)

console.log('slice')
let novoArray = array2.slice(0,3);
console.log(novoArray)

console.log('Objetos ----------------------------------------------')

//Objetos

let object = {string:'string',number:1, boolean:true, array:["array"],objectIterno:{
    objectiIterno:'Objeto Interno'
}}

console.log(object)

//como acessar apenas um objeto

console.log(object.number,object.string,object.boolean)

//como fazer desestruturação

console.log('Desestruturando o array pegando apenas o índice desejado')
var string = object.string
console.log(string)

//outra forma de desestrturar
var {string,boolean,objectIterno} = object
console.log(string,boolean,objectIterno)
