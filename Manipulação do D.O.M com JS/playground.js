line = '0 -1'

let newLine = []
newLine = line.split(' ').map(Number)

function perimetro_Poligono_Regular(line) {
    let p = 0
    if (line[0] >= 3 && line[0] <= 1000000 && line[1] >= 1 && line[1] <= 4000){
      p = Math.floor(line[0] * line[1])
      return p
    } else {
      return 'Valores inválidos!'
    }
  }

console.log(perimetro_Poligono_Regular(newLine))