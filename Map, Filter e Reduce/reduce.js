// Lista de Array
const lista_de_precos = [10, 20, 2, 5, 7, 12, 31, 52]

let listaFinal = lista_de_precos.reduce(function (previous, current) {
    return previous += current
})

function saldoFinal(lista_Final, saldoDisponivel) {
    return saldoDisponivel - lista_Final
}

console.log(saldoFinal(listaFinal, 100))

// Lista de Objeto
const lista_objetos = [
    {
        nome: 'sabao em po',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(previous, current) {
        return previous - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista_objetos))