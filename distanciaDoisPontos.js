const distanciaDoisPontos = (x1, y1, x2, y2) => Math.sqrt(((x2-x1)**2)+((y2-y1)**2))

const x1 = 4
const y1 = 3
const x2 = 5
const y2 = 2

console.log(`A distância entre os dois pontos é ${distanciaDoisPontos(x1, y1, x2, y2)}`)