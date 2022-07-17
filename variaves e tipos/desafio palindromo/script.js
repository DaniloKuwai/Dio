/*O que é um palíndromo, é uma frase que lendo ela de trás para frente ela tem o mesmo sentido*/

//Solução nº 1
function verificaPalindromo(string){
    if(!string) return;

    return string.split("").reverse().join("") === string;
    /*o reverse vai reverter o array*/
    /*o join junta todas string do array*/
}

console.log(verificaPalindromo("ovo"));

//Solução 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente"

    for(let i = 0; i <string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false
        }
    }
    return true
}

console.log(verificaPalindromo2("gato"))