/* Programa para retornar a diferença entre o quadrado da soma dos 10 primeiros números naturais e a 
soma dos quadrados dos primeiros 10 números naturais */

const primeiraParte = (count = 1) => {
    if (count == 10) return 10
    else return count + primeiraParte(count+1)
}
const primeiraParte2 = primeiraParte()**2

const segundaParte = (count = 1) => {
    if (count == 10) return 10**2
    else return count ** 2 + segundaParte(count + 1)
}

const diferenca = primeiraParte2 - segundaParte()

console.log(diferenca)