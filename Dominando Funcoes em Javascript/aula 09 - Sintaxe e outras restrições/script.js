//Arrows functions deixa o código mais enxuto, segue exemplos:

//normal
const helloWorld = function(){
    return "Hello World";
}

//usando arrow function
const helloWorld2 = () =>{
    return "Hello World";
}

//Ou até mesmo mais enxuto

const helloWorld3 = () => "Hello World";

//---------------------------------------

//Algumas questões com arrow functions(não são obrigatórias)

const soma = (a,b) => a + b;

soma(4,6);
//10

//Caso exista apenas uma linha, pode dispensar as chaves e o return

const soma2 = a => a;

soma(4);
//4

//Caso exista apenas um parâmetro, pode dispensar os parênteses.

//---------------------------------------

/* Outras restrições quando se utiliza arrow function

 -> "this" sempre será objeto global. Métodos para modificar seu valor não irão funcionar
 -> Não existe o objeto "arguments";
 -> O construtur(ex: new MeuObjeto()) também não pode ser utilizado.



*/