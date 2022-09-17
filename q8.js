//Programa para retornar os n primeiros algarismos de um número inteiro qualquer

const primeiros = (quantos) => (num) => (num.toString()).slice(0, quantos)

const numero = 675890
const n = 4

const nPrimeiros = primeiros(n)

console.log(`Os ${n} primeiros algorismos do número ${numero} são ${nPrimeiros(numero)}`)