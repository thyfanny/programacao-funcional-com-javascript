//Criar uma função que calcula a soma dos quadrados diferentes até um número n

const somaQuadrados = (num) => num == 1 ? 1 : (num ** 2) + somaQuadrados(num-1)

const num = 4

console.log(somaQuadrados(num))