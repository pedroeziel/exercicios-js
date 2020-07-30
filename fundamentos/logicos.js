function compras(trampo1, trampo2) {
    const sorvete = trampo1 || trampo2
    const Tv50 = trampo1 && trampo2
   // const Tv32 = !! (trampo1 ^ trampo2) // bitwiser xor
   const Tv32 = trampo1 != trampo2
   const saudavel = !sorvete // operador unario
  
   return{sorvete, Tv50, Tv32, saudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))