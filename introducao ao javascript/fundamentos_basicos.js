
/*Variável pode variar o valor sempre*/
var preco = 2;
var desconto = 0.2;

/*Quando usamos uma constante, ele não pode ser alterado, ele sempre vai ter o mesmo valor*/ 
const PRECO = 2;

/*Funções*/

function soma(/*Atributos, parâmetros da função*/ a,b){
    /*Console.log, é mais utilizado quando você só precisa mostrar o resultado no console*/
    console.log(a+b);

    /*Return é utilizado quando talvez você precisa manipular o resultado em outra função por exemplo  */
    return a + b;
}

/*Para chamar a função, é importante declarar os parâmetros na chamada da função que é o que vai definir os valores de a,b -> segue a ordem*/

soma(2,3);