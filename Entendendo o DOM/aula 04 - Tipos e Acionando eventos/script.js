//Alguns tipos de eventos

//eventos de mouse
//mouseover(quando o mouse passa por cima do elemento),mouseout(quando o mouse sai do foco do elemento)

//eventos de clique
//click(no momento que o elemento é clicado) dbclick(quando clica 2x o botão esquerdo do mouse no elemento)


//eventos de atualização
//change(quando houver alguma mudança ou atualização na página) load(quando a página é carregada)

//------------------------------------------

//Adicionando eventos

//Event Listener
//Diretamente no javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação,exemplo:

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);
//no momento de click ele vai ativar essa função no meuBotao

//ou podemos colocar direto na tag do html, segue exemplo:

/*<h1 onclick="mudaTexto(this)">Clique aqui!</h1>
<script>
function mudaTexto(id){
    id.innerHTML = "Mudei!"
}

</script>

No caso vai alterar o texto.
*/

