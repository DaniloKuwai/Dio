//Error -> por padrão é utilizado apenas message o filename e linenumber não são todos navegadores que utilizam.

new Error(message,fileName,lineNumber)

//todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;

//O erro também pode ter um nome, para isso posso fazer dessa forma:

const MeuErroNovo = new Error('Mensagem Inválida');
MeuErroNovo.nome = 'InvalidMessage';

throw MeuErroNovo;

//resultado Uncaught InvalidMessage: Mensagem Inválida