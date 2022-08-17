const quantosIguais = (x, y, z) => {
    if (x == y && y == z) {return 'Todos iguais'}
    else if (x != y && y != z && x != z) {return 'Nenhum é igual'}
    else {return 'Apenas um diferente'}
}

const x = 3
const y = 3
const z = 2

console.log(quantosIguais(x, y, z))