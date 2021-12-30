function substituiPar(array) {
    if(!array) return -1
    if (!array.length) return -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] = 0
        }
    }
    return array
}

console.log(substituiPar([1, 2, 4, 6, 8, 10, 12, 14, 21, 13]))
console.log(substituiPar([]))