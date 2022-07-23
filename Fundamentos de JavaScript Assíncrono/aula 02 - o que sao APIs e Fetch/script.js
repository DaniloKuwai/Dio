//Apis -> Application Programming Interface
//Uma Api é uma forma de intermediar os resutltados do back-end com o que é apresentado no front-end. Você consegue acessá-la por meio de URLs.

//Um dos formatos de api mais utilizados é o formato JSON(javascript object notation)

//---------------------------------------------

//Fetch, para consumir apis, segue um exemplo:

fetch(url,option)
    .then(response => response.json())
    .then(json => console.log(json))

//retorna uma promise    

//Com o fetch podemos utilizar métodos quando é operação com o banco de dados(POST,GET,PUT,DELETE,etc), segue exemplos:

fetch('https://endereco-api.com/',{
    method:'GET',
    cache: 'no-cache',
})

.then(response => response.json())
.then(json => console.log(json))

//Outro exemplo

fetch('https://endereco-api.com',{
    method:'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})

.then(response => response.json())
.then(json => console.log(json))