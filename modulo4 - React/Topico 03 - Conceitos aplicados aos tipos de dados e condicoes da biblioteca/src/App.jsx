import React from "react";

const buttonA = <button>Primeiro Botão</button>

const buttonB = <button>Segundo Botão</button>

const App = () =>{
    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {buttonA}
            {buttonB}
        </div>
    );
};

export default App;


