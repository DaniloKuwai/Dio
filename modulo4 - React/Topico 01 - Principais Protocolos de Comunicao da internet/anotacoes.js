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

Status code: Existem vários status, porém vamos ver algumas dela

200 OK -> request bem sucedida e objeto enviado
301 Moved Permanently -> objeto realocado nova URL no campo Location
400 Bad Request: resposta genérica - servidor não entender a mensagem
404 Not Found -> o documento solicitado é inexistente
505 HTTP Version Not Supported -> Versão do protocolo não suportada pelo servidor

(data,data,......)

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



*/