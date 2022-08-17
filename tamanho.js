//Escreva uma função recursiva chamada tamanho que retorne o comprimento de uma string

const tamanho = (str) => str == '' ? 0 : 1 + tamanho(str.slice(0,-1))

const str = "Vegas"

console.log(tamanho(str))