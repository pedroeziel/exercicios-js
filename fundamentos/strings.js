const escola = "Candid0"

console.log(escola.charAt(4))
console.log(escola.charAt(7))
console.log(escola.charCodeAt(6))
console.log(escola.indexOf('0'))

console.log(escola.substring(1))
console.log(escola.substring(0, 4))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") // + tbm serve para concatnar 
console.log(escola.replace(0, 'o'))

console.log('Ana,Maria,Pedro'.split(','))