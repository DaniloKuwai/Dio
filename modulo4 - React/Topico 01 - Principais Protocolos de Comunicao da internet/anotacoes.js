/*
 aula 01 - Como Funciona o protocolo HTTP?   

 _________________________________________________________________________________________________________________
 1.1 -> Http (HyperText Transfer Protocol)

 - Definido pelos RFCs 1945 e 2116
 - Protocolo de comunicação
 - Browser -> implementa o cliente HTTP
 - Servidor -> host objetos web

-> Http faz a comunicação entre cliente e o servidor
-> O browser está sendo cliente
-> Servidor é o que o próprio nome já diz, servidor

__________________________________________________________________________________________________________________
. Cliente

    Mensagens - Request HTTP(Recebe objetos web(recursos que ele precisa consumir))

. Servidor

    Mensagens - Response HTTP(Se comunica pelo protocolo TCP(dá controle de fuxo garante a qualidade dos envios do pacote))

 O servidor não guarda o estado do cliente, se o cliente solicita mais de uma vez a mesma informação o servidor manda, porquê não guarda o estado do cliente.
 
 -- O cliente quando acessa uma página está solicitando um GET para o servidor(host) para receber o conteúdo da página e o servidor devolve com um response
 -- Outra forma que existe também é o POST, ele o cliente não solicita apenas uma página da web, ele está enviando dados, como um envio de formulário, isso é feito
 através do método POST

 GET e POST hoje em dia são os mais utilizados.

 Formatos que o servidor recebe, alguns dos principais:

Content-Type
__________________________________________________________________________________________________________________
 XML e JSON

 Dentro do XML temos os metadados, todos os modelos seguem um padrão para o servidor receber de forma consistente

 O json tem uma linguagem mais simples, porém também tem que seguir um padrão também(composta por chave e valor)


   E ae qual seria o melhor?

Na verdade Depende, porquê vai depender qual sistema legado você vai utilizar, as vezes ele só conversa bem com xml, porém com o json não e vice e versa.

_________________________________________________________________________________________________________________

Particularidade da versão HTTP 1.1

A comunicão é feito de 3 vias (handshake de 3 vias)

- O cliente envia SYN
- Sevidor responde com o SYN ACK
- Cliente responde novamente ACK

Persistente -> Vai manter a conexão ativa
Não persistente -> Vai encerrar quando for solicitado

Outra particularidade

Eu executo uma request e só vou enviar outra assim que eu finalizar meu 1º - request

Porém os Navegadores pra ajudar fizeram de uma forma diferente, os navegadores recebem até 6 requisições diretamente, se passar disso cai na mesma questão.

Problemas do HTTP 1.1

HOL - Head of line Blocking -> A mesma questão acima, só mando outra requisição quando finalizar a primeira requisição.

*******************************************************************************************************************************************

 aula 02 - Mensagens HTTP - Request & Response

____________________________________________________________________

Estruturas de Request e Response

Request exemplo:

Texto escrito em ASCII

get:/somedir/page.htmlHTTP/1.1 -> Método e a versão do http 
Host:www.someschool.edu -> A minha URL (HOST) ou o IP
Connection:close -> Conexão não persistente, após receber as informações ele encerra a conexão
User-agent: Mozilla/5.0 -> O agente que está realizando a requisição
Accpet-Language: fr -> Preferência da linguagem que o cliente solicitou, no caso francês, mais poderia ser BR ENG

Response exemplo:

HTTP/1.1 200 OK -> Status line -> Defini a versão e o status code
Connection: close 
Date: Tue,09 Aug 2011 15:33:04 GMT
Server: Apache/2.2.3(CentOS)
Last - Modified: Tue,09 Aug 2011 15:11:03 GMT
Content-Length: 6821
Content- Type: text/html

Nos Header lines temos coisas importantes, como data, para conseguimos pegar informações no cache e podemos obter informações importantes com eles.

(data,data,......)

Status code: Existem vários status, porém vamos ver algumas dela

200 OK -> request bem sucedida e objeto enviado
301 Moved Permanently -> objeto realocado nova URL no campo Location
400 Bad Request: resposta genérica - servidor não entender a mensagem
404 Not Found -> o documento solicitado é inexistente
505 HTTP Version Not Supported -> Versão do protocolo não suportada pelo servidor

Classificação dos Status Code

- Information response(100 - 199)
- Successful response(200 - 299)
- Redirection response(300 - 399)
- Cliente error response(400 - 499)
- Server error response(500 - 599)


____________________________________________________________________
Existem diversos métodos HTTP, existem inúmeros, seguem alguns:

GET -> solicita um recurso do servidor
HEAD -> GET sem corpo de resposta
POST -> submete uma entidade a um recurso (o servidor é obrigado a tratar o conteúdo), tem que tomar cuidado, porquê se eu não definir o que o servidor recebe posso receber um trojan
PUT -> substituição de recursos pelos dados da requisição
DELETE -> remoção de um recurso
TRACE -> chamada de loop-back a um determinado recurso
OPTION -> opções de comunicação com recurso
CONNECT -> tunelamento indentificado pelo recurso
PATCH -> modificação parcial

métodos seguros: GET,HEAD e OPTION -> Não alteram o estado do servidor (Read-only)

____________________________________________________________________
Future que é boa apra o desenvolvedor

Web Distributed Authoring and Versioning(WebDav) -> Uma API que você pode usar para manipular as informações

- 102 - Processing
- 207 - Multi-status
- 208 - Already Reported
- 422 - Unprocessable Entity
- 423 - Locked
- 424 - Failed Dependency

O WebDAv permite que:

Webpage Meta: Add,deletar, retrieve
link pages
criação de conj.de documentos
copy e move
Lock: documento editado -1

********************************************************************************************************************
Aula 03 - Para que servem os Cookies e Cache?

_________________________________________________________________________

O servidor não guarda as informações do cliente, Porém e se precisarmos guardar?

Fazemos isso através dos cookies

O que são cookies:
(TRACK) - Pequenos pedaços ou blocos de dados criados e utilizados pelo servidor para persistir dados no dispositivo do cliente.

E esses cookies ficam aonde?

Eles ficam dentro do HEADER FILE, todo response carrega o header file

Basicamente quando eu recebo um request vou ler no header file o id do cliente e as informações, caso eu não tenho eu seto na máquina do cliente e caso eu tenho
eu atualizo o header file do cliente.

Exemplo de um caminho de um cookie:

Internet Explorer: "c:users\username\AppData\Roaming\Microsoft\Windows\Cookies"

Existem 2 tipos de cookies

O cookies de sessão e os cookies persistentes

Os cookies de sessão a partir do momento em que a sessão se encerra ele são apagados da memória
Os cookies de sessão persistentes, são aqueles que permnacem por meses até anos, exemplo quando você mantém o seu login ativo.

Exemplos de cookies persistentes:

Carrinho de compra em e-commerce, normalmente quando você loga novamente no site aparece o que você já colocou no carrinho
Manter logins ativos
Informações de website

Como os cookies são meio evazivos, porquê armazena dados do cliente.

Foi criado a LGPD, para a permissão de cookies

_________________________________________________________________________

Cache

Web Cache ou Proxy Server

Ao invés de mandar para o servidor o request, tenho os intermediários, Web cache, que ele verifica se ele tem a requisição da informação, comparando datas se é mais atual
ou não e se tiver no cache ele já devolve sem ser necessário fazer o request para o servidor. Caso não tenha no cache vou buscar no servidor.

As vantagens são:
Redução do tempo de resposta
Redução de tráfego

****************************************************************************************************************************************

Aula 04 - HTTP 2.0 - Atualizações do protocolo


no HTTP 1.1 tempos o HOL - Head of line Blocking que é um problema(é aquela questão de só envia outro pacote após a finalação da primeira). No HTTP 2.0 foi implementado o
streaming Id data, agora os pacotes vão ser identificados cada um por seu id, e também posso compactar e fazer diversas requisições agora. 

Uma coisa nova no http 2.0 é um item Chamado Push

Nada mais é que o servidor mandando várias páginas relacionadas a primeira página que o cliente solicitou, antes do cliente solicitar, ou seja, mandar as páginas já diretamente.
Porém essa função tem que habilitar no servidor, porém tem que ver se o cliente suporta o 2.0.

Porém com o servidor 2.0 não é necessário configurar no cliente, porquê isso é feito na negociaçãoo no handshake, o servidor verifica já na negociação se o cliente já suporte se 
suportar ele já utiliza.

Contras

Push
Configuração incorreta pode acarretar em:

Lentidão
Load Balancer - Suportado apenas no HTTp 1.1

******************************************************************************************************************************************

aula 05 - Servidores / Sistemas de aplicação

Os servidores HTTP mais conhecidos são os:

NGINX -> Servidor que veio depois, está ganhando espaço no mercado
XAMPP -> Na verdade é um ambiente é para quem está começando para fazer testes locais.
APACHE -> Mais utilizado, confiável , robusto um dos mais completos


_________________________________________________________________
Apache:

-> Datado de 1995
-> Contribuição com o WWW
-> Opensource e free
-> Mantido pela Comunidade: Apache Software Foundation

Características que ele possui:

-> Ele é modular(utiliza os recursos o que precisa), dinâmico e carrefável()
-> Possui Multiplas Request Processing
-> Altamente escalável (+ 10000 conexões simultaneas - fácil)
-> Lida com arquivos estáticos, index, auto-indexing e negociação de conteúdo
-> TLS/SSL via OpenSSl ou wolfSSL.
-> Servidores virtuais com endereços baseados em Ip ou nome
-> Compatibilidade com o IPV6
-> Suporte a versão 2.0 do HTTP
-> Proxy reverso, websocket, entre outra futures que ele possui

Tanto para linux e Windows
_________________________________________________________________

Xampp:

Pacote(utiliza o apache) / Ambiente

-> Apache server
-> MariaDB
-> Interpretadores script - PHP/Perl

OpenSSl, phoMyAdmin, MediaWki, Joomla, Wordpress...

Se ele tem tudo isso, porquê não uso ele em produção? porquê ele é feito para testes de desenvolvimento e não tem acesso a internet
________________________________________________________________

Nginx:

Servidor / Lançado em 2004

-> Web server
-> Proxy reverso
-> Load Balancer
-> Mail proxy
-> HTTP cache

Características:

-> +10 mil conexões simultaneas
-> Lida com arquivos estáticos, iindex, auto-indexing
-> proxy reverso
-> Load Balance
-> TLS/SSL com SNI via OpenSSL
-> Suporte a HTTP 2.0
-> Compatível com IPV6
-> FastCGI SCGI, uWSGI com cache
-> Suporte a gRPC(v.1.13.10)
-> Servidores virtuais baseado em IP e nome
-> WebSocket desde 1.3.13
-> Url rewriting and redirection[35][36]
_________________________________________________________________


*/