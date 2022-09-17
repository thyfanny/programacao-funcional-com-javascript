//Programa para somar todos os múltiplos de 3 e os múltiplos de 5, que são menores que 1000

const ehMultiplo3 = (n) => n % 3 == 0
const ehMultiplo5 = (n) => n % 5 == 0

const soma = (num) => {
    if (num == 0) return 0
    else if (ehMultiplo3(num) || ehMultiplo5(num)) return num + soma(num-1)
    else return soma(num-1)
}

const somaAte = 1000

console.log(soma(somaAte - 1))