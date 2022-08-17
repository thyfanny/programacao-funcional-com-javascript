//Soma dos n primeiros números naturais.

const somaNaturais = (n) => n == 1 ? 0 : n-1 + somaNaturais (n-1)

const n = 5

console.log(somaNaturais(n))