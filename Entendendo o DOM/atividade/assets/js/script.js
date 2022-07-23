
//uma boa prátiica quando se cria uma função é criar elas apenas como uma tarefa, ficando mais claro e mais fácil depois ajustar cada função.

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeText(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + "ON"
        return
    }//o contains verifica se existe a classe dark-mode que foi extraída pela constante darkModeClass

    button.innerHTML = darkMode
    h1.innerHTML = lightMode + "ON"
}


const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]//estamos selecionando pelo nome da tag, porém como ele vem como um array não conseguimos manipular ele diretamente,para selecionar devemos colocar o índice que estamos selecionando para não selecionar todos os itens da coleção. Mesma coisa para o footer
const footer = document.getElementsByTagName('footer')[0]


button.addEventListener('click',changeMode)