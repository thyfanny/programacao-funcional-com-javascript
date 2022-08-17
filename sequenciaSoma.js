//N-ésimo termo da sequência \{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...\}{0,1,1,2,3,5,8,13,21,34,55,...}

const sequenciaSoma = (n) => {
    if (n == 1) return 0
    else if (n == 2) return 1
    else return sequenciaSoma(n-2) + sequenciaSoma(n-1)
}

const n = 4

console.log(`O elemento na posição ${n} é ${sequenciaSoma(n)}.`)