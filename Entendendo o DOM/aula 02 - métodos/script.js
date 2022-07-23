document.getElementById('titulo') // retorna o elemento com o id titulo
document.getElementsByTagName('li') // retorna o elemento como um array com o li porquê é elements
document.getElementByIdClassName('textos'); //retorna pelo nome de uma classe,retorna um array também
document.querySelectorAll('.primeira-classe .segunda-classe')//também retorna um array, que ele vai buscar o elemento que possui as classes, .primeira-classe e segunda-classe
document.querySelectorAll('li .opcao')//vai retornar um array com o elemento que é uma li e que possui a classe .opcao

//-----------------------------------------

//Para adicionar elementos ou remover

//segue uma tabela

/*
    Método                              |  Descrição
    document.createElement('element')   |   Cria um novo elemento HTML
    document.removeChild('element')     |   Remove um elemento
    document.appendChild('element')     |   Adiciona um elemento
    document.relaceChild('new,old')     |   Substitui um elemento 

*/