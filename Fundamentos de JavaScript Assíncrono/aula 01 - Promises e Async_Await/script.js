/*Primeiramente vamos definir o que é assíncrono:
-> Que não ocorre ou não se efetiva ao mesmo tempo
O javascript roda de maneira síncrona, ele faz coisas linha a linha, porém tem como deixar ele assíncrono

---------------------------------------------------------------------

Promises -> É um objeto de processamento assíncrono

Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada

Resumindo uma promise é um dado que você recebe que você não sabe se ele vai ser resolvido ou se ele vai ser rejeitado, é apenas uma promessa ainda um dado que você recebeu.

A promise tem 3 estados

1) Pending -> Quando está pendente
2)Fulfilled -> Completado
3)Rejected -> Rejeitado

Vamos a um exemplo:

const myPromise = new Promise((resolve,reject)=>{
    window.setTimeout(()=>{
        resolve(console.log('Resolvida'));
    }), 2000);
});  

//também temos o await que depois que ela finalizar a verificação que são as ações

await myPromise
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'e agora acabou!')
        .catch((err) => console.log(err.message));

//Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou"   


-------------------------------------------------------------------------

Async/Await

Funções assíncronas precisam dessas duas palavras chave.

exemplo:

async function resolvePromise(){
    const myPromise = new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            resolve('Resolvida')
        }),3000);
    });
}

const resolved = await myyPromise
.then((result)=> result + 'passando pelo then')
.then((result)=> result + 'e agora acabou!')
.catch((err)=> console.log(err.message));

return resolved;
}

//Ou seja o await vai parar o código e vai aguardar tudo se resolver e é necessário o async para deixar a função async

*/

