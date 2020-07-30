// Par nome/Valor
const saudação = 'Opa' // contexto léxico 1

function exec() {
    const saudação = 'Falaa irmão' // contexto lexico 2
    return saudação
}

// objetos sao grupos ainhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 25,
    peso: 50,
    endereço: {
        logadoro: 'Rua beira rio',
        numero: 60,
        bairro: 'Do carmo',
        cidade: 'Parnaiba'
    }
}

console.log(saudação)
console.log(exec())
console.log(Cliente)