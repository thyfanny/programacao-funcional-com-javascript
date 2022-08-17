//Dado um número, devolva a soma total desse número multiplicado por cada número entre 1 e 10. Nome da função deve ser multiSoma

const multiSoma = (num, multi = 10) => multi == 1 ? num : (num*multi) + multiSoma(num, multi-1)

const num = 4

console.log(multiSoma(num))