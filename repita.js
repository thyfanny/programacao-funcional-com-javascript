//Criar uma função recursiva chamada repita que pega dois parâmetros e repete a string n vezes. O primeiro parâmetro txt é a string a ser repetida e o segundo parâmetro é o número de vezes que a string deve ser repetida

const repita = (str, num) => num == 1 ? str : `${str}\n` + repita(str, num-1)

const str = 'Vegas'
const quantidade = 4

console.log(repita(str, quantidade))