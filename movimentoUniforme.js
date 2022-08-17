function velocidade(t, s){
    //v = dS/t
    return (s-500)/t
}

const t = 30
const x = 2000

console.log(`O objeto no instante ${t} e posição ${x} possui velocidade ${velocidade(t, x)}.`)