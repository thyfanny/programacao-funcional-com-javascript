const ehTriangulo = (x, y, z) => {
    return (((x+y) > z) && ((x+z) > y) && ((y+z) > x))
}

const classTriangulo = (x, y, z) => {
    if (x == y && y == z) {return 'Equilátero'}
    else if (x != y && x != z && y != z) {return 'Escaleno'}
    else {return 'Isósceles'}
}

const lado1 = 4
const lado2 = 2
const lado3 = 2

if (!ehTriangulo(lado1, lado2, lado3)) {
    console.log('Não é um triângulo')
}
else {
    console.log(`O triângulo é ${classTriangulo(lado1, lado2, lado3)}`)
}