//Quociente da divisão entre dois números inteiros positivos fornecidos, nn e mm. Naturalmente, você não deve utilizar operadores de divisão da linguagem

const quociente = (n, m) => n < m ? 0 : 1 + quociente(n-m, m)

const dividendo = 31
const divisor = 7

console.log(`${dividendo} : ${divisor} = ${quociente(dividendo, divisor)}`)