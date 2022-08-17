const ehMenor = (x, y) => {
    if (x <= y) {return x}
    else {return y}
}

const menorDeTodos = (x, y, z) => ehMenor(x, ehMenor(y, z))

const x = 3
const y = 2
const z = -9

console.log(`O menor número é ${menorDeTodos(x, y, z)}`)