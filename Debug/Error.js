//new Error(message, filename, lineNumber);

const meuErro = new Error('Mensagem Inválida')
meuErro.name = 'Invalid Message' //Renomeando o nome da variável através de ".name"
console.log(meuErro)