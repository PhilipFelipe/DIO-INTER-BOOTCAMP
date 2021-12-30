class contaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.saldo = 0;
        this.agencia = agencia;
        this.tipo = tipo;
        this.numero = numero;
    }
    set novoSaldo(value) {
        this.saldo = value
    }
    get chamaSaldo() {
        return this.saldo
    }

    sacar(value) {
        if (value > this.saldo) {
            return 'Operação negada'
        }
        this.saldo = this.saldo - value
        return this.saldo
    }

    depositar(value) {
        this.saldo = this.saldo + value
        return this.saldo
    }
}


class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoDeCredito) {
        super(agencia, numero)
        this.tipo = 'conta corrente'
        this.cartaoDeCredito = cartaoDeCredito
    }

    get chamaCredito() {
        return this.cartaoDeCredito
    }

    set cartaoCredito(value) {
        this.cartaoDeCredito = value
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'conta poupança'
    }

}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'conta universitaria'
    }
    sacar(value) {
        if (value > 0 && value < 500) {
            this.saldo = this.saldo - value
            return this.saldo
        } else {
            let erro = new Error('Valor do saque ultrapssou o permitido!')
            erro.stack = false
            throw erro
            ;
        }
    }
    depositar(value) {
        return super.depositar(value)
    }
}
