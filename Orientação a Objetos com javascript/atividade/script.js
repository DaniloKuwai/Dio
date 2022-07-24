class ContaBancaria{
    constructor(agencia,numero, tipo, saldo){
    //basicamente tudo que for enviado para uma classe tem que ser declarado no método constructor, nesse caso vamos mander agencia, numero, tipo e saldo
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0    
    }
    //sempre quando vamos chamar um parâmetro de uma classe para usar o get ou o set, devemos sempre colocar antes do nome do parâmetro o underline _saldo
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero)
        this.tipo = 'Conta Corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}


class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero)
        this.tipo = 'Poupanca'
    }

}


class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero)
        this.tipo = 'Universitaria'
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada"
        }

        this._saldo = this._saldo - valor
    }
}