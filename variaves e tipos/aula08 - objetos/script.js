let objs = {}

objs.name = julia

/*resultado: {name: 'Danilo'}*/

objs.age = 20

/*resultado: {name: 'Danilo' age:20}*/

/*Para saber as keys*/

Object.keys(objs)

/*resultado (2)["name","age"]*/

/*Para saber os valores dos objetos*/

Object.values(objs)
/*resultado (2) ["Danilo",20]*/

/*Formas de acessar os valores*/

let person = {
    name:"Julia",
    age: 20,
    adress: "Rua 2"
}

/*Duas formas para acessar os valores*/

person.name 
person["name"]

/*Para adicionar um valor no objeto*/

person[mom] = "Maria"

/*Vai adicionar o índice mom com o valor maria*/ 
