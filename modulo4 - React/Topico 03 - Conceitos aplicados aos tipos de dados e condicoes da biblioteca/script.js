/*
*********************************************************************************************
aula 05 - O que é webpack?
O que é Webpack?

É um module bundler(um empacotador de módulos para aplicações JS)

Gerar bundler que será utilizado no HTML, em ES5

o que é um bundler?

Ele é um arquivo final onde o webpack pega todos os módulos e vai empacotar todos os arquivos.

*********************************************************************************************

aula 06 - Aprenda a configurar o webpack

Principais conceitos do Webpack:

► Entry - Utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências

► Output - É para determinar quais são os bundlers que o Webpack irá emitir.

► Loaders - É para permitir que o Webpack gerencie arquivos não só javascript.

► Plugins - Plugins podem ser utiliziados para otimização de pacotes, minificação, injeão de scripts e muito mais.

► Mode - Utilizados para abordagem de configuração zero. É possível configurar módulos como
production, development ou none;

Production trás otimizações internas

Development - É executado com três plugins: UglifyJsPlugin, MooduleConcatenationPlugin e NoEmitOnEErrosPlugin

Configuração

1º inicializar o projeto com o npm init
2º para instalar o webpack - npm i -D webpack webpack-cli
3º depois de instalado vamos criar um arquivo dentro da pasta do projeto chamado webpack.config.js
4º nunca esquecer de deixar o arquivo webpack.config.js sempre no mesmo nível da pasta node_modules

Comandos tirados da internet:

mkdir webapp                           --> crie a pasta do projeto
cd webapp                              --> entre na pasta do projeto
npm init                                     --> inicie o npm
npm install webpack webpack-cli --save-dev   --> instale o webpack
mkdir src                                    --> crie a pasta src
cd src                                       --> entre na pasta src
echo "console.log('hello world')" > index.js --> crie o arquivo main


Agora instação do babel

1º executar o seguinte comando| npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

Depois deu um porrada de erros que não foram explicados na aula, segue o jogo vamos aprendendo trabalhando.

**************************************************************************************************

Nslint

Ele serve para verificar no código todos os erros, faltando ponto e vírgula por exemplo, função sem return entre outros.

Arquivos do React: 

► package.json:

O package json é onde vão estar todas as configurações e dependências do projeto

► npm

ele é um gerenciador de dependências do javascript.

► index.js

aqui é o arquivo principal, meu arquivo react, dentro dele tenho que fazer meus imports

Dentro dela temos no final 2 importantes funções que é o 

const rooElement = document.getElementById("root") // ta pegando o id da div do index.html
ReactDOM.render(<App />, rootElement) // O reactDom, estou passando um parâmetro e vou executar o meu elemento com o render que é uma função que vai reenderizar.

► JSX (não é obrigatório utilizar ele, porém ele simplifica bastante, porquê ele é um syntax sugar), o Jsx não é interpretado pelo browser, para isso é
necessário utilizar um transpilador de código, por exemplo o babel.

-- Então o que é o JSX
por exemplo, eu posso criar uma função, onde eu tenho que ter um retorno dela, e dentro do return vou ter meu html, só que tudo que tiver dentro de um JSX eu tenho 
que colocar entre chaves {}
Isso é dentro do index.js que é colocado todas as funções e é nela que fica a SPA(single page aplication)

► para instalar a pasta node_modules, só dar um npm install

*/




