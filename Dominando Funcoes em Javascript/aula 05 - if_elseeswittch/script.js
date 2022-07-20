//algumas formas de declara o if

//1º delas:

function numeroPositivo(num){
    let resultado;

    if(num<0){
        resultado = false;
    }else{
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2)
//true

numeroPositivo(-9)
//false

//2º delas - clean code, boas práticas

function numeroPositivo(num){
    let resultado;

    //já se coloca a condicional dentro da variável em vez de declara entre parênteses
    const ehNegativo = num < 0;

    if(ehNegativo){
        resultado = false;
    }else{
        resultado = true;
    }

    return resultado;
}

//3º delas - mais enxuto sem o else

function numeroPositivo(num){
    const ehNegativo = num < 0;

    if(ehNegativo){
        return false;
    }

    return true;
}

//---------------------------------------------

//Aninhamento, if dentro de outro if

function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo){
        return "Esse númer é negativo!";
    }else if(!ehNegativo && maiorQueDez){
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo";
}

//---------------------------------------------
//Switch / Case

//exemplo:

function getAnimal(id){
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "passaro";
        default:
            return "peixe";        
                
    }
}

getAnimal(1)//cão
getAnimal(4)//peixe
getAnimal("1")//peixe



