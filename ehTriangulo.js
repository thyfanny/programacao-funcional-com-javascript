const ehTriangulo = (x, y, z) => {
    return (((x+y) > z) && ((x+z) > y) && ((y+z) > x))
}

const lado1 = 3
const lado2 = 4
const lado3 = 5

if (ehTriangulo(lado1, lado2, lado3)) {
    console.log('É triângulo')
}
else{console.log('Não é triângulo')}