{ 
    { 
        { 
            {
                 var sera = 'Será? '
                 console.log(sera)
            } 
        }
     }
    
}
console.log(sera)

function teste() { // quando se define uma variavel dentro duma função ela so pode se execultada dentro da mesma
    var local = 25
    console.log(local)
}
teste()
console.log(local)

// quando se coloca uma variavel fora de uma função ela se torna global
// deve evitar de criar variavel global 
// variavel var so tem dois scopoos possivel, Global ou Função
