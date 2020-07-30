// armazenando uma função em uma variavel  // se pode pegar uma função e atribuir numa variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtração = (a, b) => a - b
console.log(subtração(2, 3)) 

const imprimir2 = a => console.log(a)
imprimir2('Bom dms!!')