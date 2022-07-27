/*
************************************************************************

aula 01 - Conheça a tecnologia ReactJS

ReactJs não é um framework é somente um biblioteca javascript

Criado em 2011 por Jordan Walke no facebook

Porquê foi criado?

Foi por conta da demanda de um feed no facebook que estava dando muito problema

O propósito dele simplesmente é para fazer interface para o usuário


React é uma linguagem declarativa

************************************************************************

aula 02 - Aprenda a configurar o ReactJS

-> Abrindo pelo gitbash porquê estou usando windows, posso iniciar meu projeto dando um npm init e dar enter em tudo
-> Para instalar o react no projeto npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1
-> Após fazer a instalação, tem que ser criado 2 pastas, uma pasta public, contendo o seu HTML simples e a src, contendo a index.js que é quem vai controlar toda a página
e o styles.css
-> dentro da index.html de public, devemos criar uma div <div id="root"></div> que é ai que vai ficar todas as alterações feito no index.js
-> Se quisermos adicionar uma classe, devemos criar no index.js mesmo chamando a classe criada em styles.css, porém não podemos colocar a palavra class, porquê é uma palavra
reservada do js, então colocamos a className

************************************************************************

aula 03 - Renderizando elementos

Renderização de Elementos;

React Dom (Na verdade é o dom virtual)
Ele controla tudo que tá no seu dom, ele quando tem uma atualização e somente teve a alteração ele vai aplicar a nova renderização, traz muitas vantagens
de perfomance e evita muitos erros

Nós Raiz

___________________________________

Renderização

React "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de perfomance e evita uma série de erros

o ReactDOM.render eu estou definindo o que eu quero renderizar na página, por exemplo

const element = 'Digital Innovation'
const element2 = <h1>Olá Turma =d</h1>

const rootElement = documeent.getElementById("root")
ReactDom.render(element2,rootElement)

Vai aparecer só o Olá turma na página, porém e se eu quiser reenderizar os 2? Para isso posso criar usar o JSX,criando uma função chamada AP

function App(){

    return(
        <div>
        {element}
        {element2}
        </div>
    )
}

const.rootElement = document.getElementById("root")
ReactDom.render(<App />,rootElement) Tenho que chamar a minha função criada para retornar os 2 elementos.


________________________________________________

Componentes e Props

► Componentes:

O reactJs ele tem vários componentes, para ter componentes padrões

► Props: 
As props, nada mais são que as propriedades de um compnente, quando se cria uma classe por exemplo(aqui já vem por padrão o props(propriedades))

***************************************************************************


aula 04 - Conheça o ecossistemas do ReactJS

Muito Importante

Estado e Ciclo de Vida:

► Inicialização

► Montagem

► Atualização

► Desmontagem

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não.

O stado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props.

Quando é criado uma classe no index.js, primeiro claro preciso sempre fazer a importação para poder utilizar, dentro de uma classe em vez do método return, eu preciso
colocar o método render(), exemplo:

class App extends Componente(){
   constructor(props){
    super(props)

    this.state ={
        clock:1000,
        copo:'Agua'
    }
   }

  alterarCopo = () => {
    this.setState({
        copo: 'refrigerante'
    })
  } 
   
   
    render(){
        return(
            <div>
                <h1>{this.state.lock}</h1>
                <button onclick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

Ecossistema do React

React Router;
Redux;
Material UI;
Ant-Design;
StoryBook;
Gatsby;
Jest;
React i18n Next;

*/
