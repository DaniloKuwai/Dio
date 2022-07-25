let funcionario2:{codigo:number,nome:string}={
    codigo:10,
    nome:'Jhon'
}

funcionario2.codigo = 10;
funcionario2.nome = "John";

//---------------------------------------------

interface funcionario {
    codigo:number,
    nome:string
}

let funcionario3: funcionario = {
    codigo:200,
    nome:'Rabbit'
}