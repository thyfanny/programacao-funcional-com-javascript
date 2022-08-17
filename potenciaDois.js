//Potência natural do número 2: 2^n. Naturalmente, você não deve utilizar o operador de expoente da linguagem.
//Potência de dois usando somente recurssão

const potenciaDois = (n) => n == 0 ? 1 : 2 * (potenciaDois(n-1))

const n = 4

console.log(potenciaDois(n))