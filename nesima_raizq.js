/*O quadrado perfeito na n-ésima posição vai ser o próprio n ao quadrado, ou seja n * n
Como * não podia ser utilizado na resolução, a multiplicação foi feita através da recurssão, substituindo a multiplicação por soma
A função nesima_raizq soma n + n até que o contador (que inicialmente tem o mesmo valor de n) se iguale a 0, ou seja n + n, n vezes
*/

const nesima_raizq = (n, count = n) => {
    if (count == 0) return 0
    else return n + nesima_raizq(n, count-1)
}

const n = 8

console.log(`O ${n}° quadrado perfeito é ${nesima_raizq(n)}.`)

//https://jsfiddle.net/thysilva/4s5z916g/17/