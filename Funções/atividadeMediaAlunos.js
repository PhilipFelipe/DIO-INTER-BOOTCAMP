const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C'
    },
];

function alunosAprovados(array, mediaFinal) {
    let aprovados = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].nota >= mediaFinal) aprovados.push(array[i].nome)
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))
