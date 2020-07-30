const prod1 = {}
prod1.nome = 'Fone de Ouvidor'
prod1.preço = 325.50
prod1['promoção'] = 0.40 + '% ' + 'Off' // evotar atributos com espaço

console.log(prod1)

const prod2 = {                    // se pode ter obejeto dentro de objeto...
    nome: 'Meião Flamengo',
    preço: 25.99
}

console.log(prod2)