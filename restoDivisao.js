//Resto da divisão entre dois números inteiros positivos fornecidos, nn e mm. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

const restoDivisao = (n, m) => n < m ? n : restoDivisao(n-m, m)

const dividendo = 31
const divisor = 7

console.log(`${dividendo} % ${divisor} = ${restoDivisao(dividendo, divisor)}`)