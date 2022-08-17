//N-ésimo termo da sequência \{3,6,12,24,48,...\}{3,6,12,24,48,...}

const sequenciaDobro = (n) => n == 1 ? 3 : 2 * sequenciaDobro(n-1)

const n = 5

console.log(`O elemento na posição ${n} é ${sequenciaDobro(n)}.`)