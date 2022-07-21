//Manipulando o this, existem vários métodos

//1º Call

//exemplo:

const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa);

//se observar o this, não tem relação com os objetos pessoa e animal, porém quando eu chamo com a função com o método call eu coloco
//o objeto que eu quero que this se refira, no caso pessoa, significa a mesma coisa que pessoa.nome que o resultado seria Miguel

//poderia chamar o animal também

getSomething.call(animal)

//2º Quando a função tem argumentos

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b); 
}

soma.call(myObj,1,5);
//12

//-------------------------------------------------------------------------

//2º Apply

const pessoa1 = {
    nome: 'Miguel',
};

const animal1 = {
    nome: 'Godi',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa1);

//nesse caso a aplicação é igual

//porém o aply é diferente quando se tem parâmetros, segue exemplo:

const myObj1 = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b); 
}

soma.apply(myObj1,[1,5]);
//12

//quando é colocado os valores dos parâmetros da função ele é declarado dentro de um array diferente do call.


//-------------------------------------------------------------------------

//3º bind -> Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

const retornaNomes = function(){
    return this.nome;
}

let bruno = retornaNomes.bind({nome:'Bruno'});
//o .bind(vai fazer com que a função retornaNomes seja clonada), como ele está clonando o this para a ser nome.

bruno();//-> temos que colocar entre parênteses porquê virou uma função a variável bruno
//Bruno