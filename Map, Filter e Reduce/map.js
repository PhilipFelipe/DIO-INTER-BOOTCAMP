// Map com o This
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapeiaArray(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value
    }, thisArg)
}

const numeros = [1, 2];

console.log('this -> maçã', mapeiaArray(numeros, maca))

console.log('this -> laranja', mapeiaArray(numeros, laranja))

// Map sem o This
const array2 = [2, 4, 6, 8, 10]

let x = array2.map((e) => {
    return e * 2
})
console.log(x)

