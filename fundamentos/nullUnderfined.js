let valor // n inicializada
console.log(valor)

valor = null // ausênsia de valor
console.log(valor)
// console.log(valor.toString()) // vai dar erro se tentar acessar algp que ta nulo

const prod = {}
console.log(prod.preço)
console.log(prod)

prod.preço = 25
console.log(prod)

prod.preço = undefined // evitar atribuir underfined
console.log(!!prod.preço)
// delete prod.preço // usar essa forma caso queira deletar atributo de um obj
console.log(prod)

prod.preço = null // sem preço
console.log(!!prod.preço)
console.log(prod)