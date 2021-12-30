function verificaPalindromo(string) {
    if (!string) {
        return
    }
    let newString = ''
    let varNumb = /^[0-9a-z-A-Z]+$/
    stringArray = string.split('')
    for (let i = 0; i < stringArray.length; i++) {
        if (!stringArray[i].match(varNumb)) {
            delete stringArray[i]
            newString = stringArray.filter(entry => entry.trim() != '')
        }
    }

    let j = newString.length - 1
    for (let i = 0; i < j / 2; i++) {
        let x = newString[i]
        let y = newString[j - i]
        if (x != y) {
            return false
        }
    }
    return true
}

function isPalindromo(string) {
    resposta = verificaPalindromo(string)
    if (resposta == true) {
        console.log("É palíndromo!")
    } else {
        console.log("Não é palíndromo...")
    }
}

isPalindromo("nope")