//Escreva uma função recursiva que inverte uma string. Nome deve ser inverte

const inverte = (str) => str == '' ? '' : str.slice(-1) + inverte(str.slice(0,-1))

const str = 'Vegas Theerapanyakul'

console.log(inverte(str))