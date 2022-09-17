//Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda

const lista1 = ['Pete', 'Khun', 'Kim', 'Porsche', 'Vegas', 'Kinn']
const lista2 = ['Vegas', 'Pete', 'Macau', 'Venice']

const elementosIguais = (lista1, lista2, contador = 0) => {
    if (contador == lista1.length) return 0
    else if (lista2.indexOf(lista1[contador]) == -1) return 0 + elementosIguais(lista1, lista2, contador + 1)
    else return 1 + elementosIguais(lista1, lista2, contador + 1)
}

console.log(`Há ${elementosIguais(lista1, lista2)} elementos iguais nas listas.`)