/*O que é um palíndromo, é uma frase que lendo ela de trás para frente ela tem o mesmo sentido*/

function verificaPalindromo(string){
    if(!string) return;

    string.split("").reverse().join === string;
    /*o reverse vai reverter o array*/
    /*o join junta todas string do array*/
}