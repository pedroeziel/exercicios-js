const valores = [2.5, 1.8, 5.4, 7.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // quando se tenta acessar elemento que n existe volta 'undefined'

valores[4] = 25
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)