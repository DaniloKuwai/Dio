//Throw

//Vamos a um exemplo com o return e o throw

function verifiicaPalindromo(string){
    if(!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verifiicaPalindromo('cat');
//vai retornar apenas a mensagem String inválida como string mesmo e não como erro, agora vamos pegar o mesmo código e usar o throw no lugar

function verifiicaPalindromo(string){
    if(!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verifiicaPalindromo('cat');

//Ele vai retornar como mensagem de erro mesmo a mensagem "uncaught string inválida"

//-------------------------------------------

//Try/Catch

//Dentro do bloco Try vou verificar um pedaço de código e se nesse bloco de código encontrar algum erro, ele vai ser capturado pelo catch

//segue exemplo:

function verifiicaPalindromo2(string){
    if(!string) throw "String inválida";

    return string ===
    string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verifiicaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
}

tryCatchExemplo('');

//resultado String inválida

//-------------------------------------------

//Finally -> Uma instrução que vai ser chamado no final independente se tem um erro ou não.


function verifiicaPalindromo2(string){
    if(!string) throw "String inválida";

    return string ===
    string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verifiicaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log('A string enviada foi:'+ string );
    }
}

tryCatchExemplo('ala');

