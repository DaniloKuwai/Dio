//para adicionar classes para alterar estilos de elementos podemos fazer dessa forma

/*supondo que tenhamos um elemento html uma div da seguinte forma
    <div id="meu-elemento" class="classe">
    <!-- resto do código aqui-->
    </div>
*/

//agora vamos manipulas

const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
//adiciona a classe "novo-estilo"

meuElemento.classList.remove("classe")
//Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
//Adiciona a classe "dark-mode" caso ela não faça parte do elemento
//remove caso ela faça parte do elemento.


//após rodar o código a div ficou dessa forma

/*
<div id="meu-elemento" class="novo-estilo dark-mode">
</div>
*/

//-----------------------------------------------------

//Acessando diretamente oo CSS de um elemento

document.getElementsByTagName("p").style.color = "blue";