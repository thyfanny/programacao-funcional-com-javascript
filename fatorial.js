//Fatorial de um número natural qualquer

const fatorial = (n) => n == 1 ? 1 : n * fatorial(n-1)

const n = 4

console.log(`O fatorial de ${n} é ${fatorial(n)}`)