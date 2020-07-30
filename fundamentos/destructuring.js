const pessoa = {
    nome: 'Pedro',
    idade: 25,
    enredeço: {
        Rua: 'Beria rio',
        numero: 60,
        bairro: 'Do carmo',
        cidade: 'Parnaiba'
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

    const { sobrenome, bemHumorada = true } = pessoa
    console.log(sobrenome, bemHumorada)

    const { enredeço: { Rua, numero }  } = pessoa
    console.log(Rua, numero)