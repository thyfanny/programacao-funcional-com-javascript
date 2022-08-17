const ouExclusivo = (a, b) => (a || b) && !(a && b)

const a = true
const b = false

console.log(`a ⊗ b = ${ouExclusivo(a, b)}`)