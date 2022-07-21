//método this
//quando usa o this dentro de um objeto(função) ele vai se referir ao objeto pai desse método, segue exemplo:

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return this.firstName + "" + this.lastName;
        //o this está se referindo ao objeto pessoa, então quer dizer, pessoa.firstName e a mesma coisa para o lastname no caso
        //e com o return quando é chamado o método fullName já vai retornar "André Soares"
    },
    getId:function(){
        return this.id;
        //mesma coisa na questãoo do id, seria a mesma coisa que pessoa.id e quando é chamado a função retorna 1
    }
};

pessoa.fullName();
// "André Soares"

pessoa.getId();
// 1


//-------------------------------------------------------------

/* This o que é?

Seu valor pode mudar de acordo com o lugar no código onde foi chamada

______________________________________________________________________
Contexto                    |  Referência
Em um objeto(método)        |  Próprio objeto dono do método
Sozinha                     |  Objeto global(em navegadores, window(window.document))
Função                      |  Objeto global
Evento                      |  Elemento que recebeu o evento
______________________________________________________________________


*/

//Vamos a exemplos:

//Fora da função

console.log(this)

// Ele vai se referir ao elemento pai que no js é o window já que não tem mais nada a se referir

//-------------------------------------------------------------

//Dentro de uma função

(function (){
    console.log(this);
})();

//também vai ser global, porém ele vai se referir a essa função e não a window mais.

//-------------------------------------------------------------

//Dentro de um objeto(método)

const pessoa1 = {
    firstName: 'Diego',
    lastName: 'Vieira',
    getFullname: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

pessoa1.getFullname();

//vai se referir a pessoa1 igual no primeiro exemplo,ou seja ao objeto pai da função

//-------------------------------------------------------------

//Em um evento no HTML

<button id="my-btn" onclick='console.log(this)'></button>
//nesse caso o this é o elemento que recebeu o evento,nesse caso o botão que recebeu o evento de onclick então o this vai se referir ao botão.

//Ou seja resumindo, o this depende do contexto para saber o que ela significa, onde ela está inserida no código.
