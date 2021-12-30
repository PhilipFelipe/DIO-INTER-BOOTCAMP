function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Felipe',
    idade: 19
}

const pessoa2 = {
    nome: 'Ana',
    idade: 22
}

const animal = {
    nome: 'Scooby',
    idade: 1,
}

console.log(calculaIdade.call(animal, 10))
console.log(calculaIdade.apply(pessoa1, [4]))