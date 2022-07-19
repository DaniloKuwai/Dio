//Spread: uma forma de lidar separadamente com elementos
//vamos a um exemplo:

function sum(x,y,z){
    return x + y + z;
}

//no caso se nós fizessemos assim:

const numbers = [1,2,3];

//nós não estariamos passando 3 argumentos e sim apenas o x e para isso podemos utilizar o Spread, representado pelo ...

console.log(sum(...numbers));

//-----------------------------------

//Rest: combina os argumentos em um array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho() //se a gente não manda nenhum parâmetro, o tamanho do array vai ser 0
confereTamanho(1,2)//se a gente manda (1,2) o tamanho do nosso array é 2
confereTamanho(3,4,5) //se a gente manda(1,2,3) o tamanho do nosso array é 3


//---------- Objetos -------------------------

//Método Object Destructuring

const user = {
    id:42,
    displayName:'jdoes',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName:{firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

userId(user)

//42

getFullName(user)
// John Doe

//Quando defino os parâmetros entre chaves {id} e chamo a função userId(com o parâmetro user), ele vai buscar o parâmetro id dentro da minha const user, mesma coisa com o getFullName