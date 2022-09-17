const carrinho = [{codigo: '01', produto: 'Arroz', valor: 5.00, tipo: 'Alimento',fragil: 'S'}, 
                  {codigo: '02', produto: 'Feijão', valor: 10.00, tipo: 'Alimento', fragil: 'S'},
                  {codigo: '03', produto: 'Macarrão', valor: 4.00, tipo: 'Alimento', fragil: 'S'},
                  {codigo: '04', produto: 'Vasilha de plástico', valor: 30.00, tipo: 'Utensílio', fragil: 'N'}]

//(a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes)
const conversao = (taxa) => (valor) => valor*taxa
const conversao55 = conversao(5.5)
const listaConversao = carrinho.map(carrinho => conversao55(carrinho.valor))
const saidaConversaoMoeda = (lista, contador = 0) => {
    if (contador == lista.length) return ''
    else return `Preço do ${lista[contador].produto} com a taxa: R$${listaConversao[contador].toFixed(2)}\n` + saidaConversaoMoeda(lista, contador + 1)
}

//(b) Calcular o valor total gasto com a compra
const valorTotal = carrinho.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor)}, 0)
const saidaValorTotal = `Valor total a ser pago: R$${conversao55(valorTotal).toFixed(2)}`

//(c) Calcular o valor total gasto aplicando-se algum desconto
const percentualDesconto = 15
const calculoDesconto = (percentualDesconto) => (valor) => valor - ((percentualDesconto/100) * conversao55(valor))
const desconto = calculoDesconto(percentualDesconto)
const descontoConversao = (valor) => desconto(conversao55(valor)).toFixed(2)
const totalDesconto = `Valor total a ser pago com o desconto: R$${descontoConversao(valorTotal)}`

//(d) Calcular o valor total gasto com os produtos frágeis
const frageis = carrinho.filter(carrinho => (carrinho.fragil == 'S'))
const totalFrageis = frageis.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor)}, 0)
const saidaFrageis = `Valor total de produtos frágeis: R$${descontoConversao(totalFrageis)}`

//(e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C')
const comecaLetra = (letra) => carrinho.filter(carrinho => ((carrinho.produto).slice(1) == letra.toUpperCase()))
const letra = 'C'
const totalLetra = comecaLetra(letra).reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor)}, 0)
const saidaLetra = `Total gasto com produtos que iniciam com a letra ${letra}: R$${descontoConversao(totalLetra)}`

//(f) Calcular o valor médio gasto por tipo de produto com a compra realizada
// type = 'Utensílio' || 'Alimento'
const utensilioString = 'Utensílio'
const alimentoString = 'Alimento'
const mesmoTipo = (type) => carrinho.filter(carrinho => carrinho.tipo == type)
const totalAlimeto = mesmoTipo(alimentoString).reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor)}, 0)
const totalUtensilio = mesmoTipo(utensilioString).reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor)}, 0)
const saidaMesmoTipo = `Valor médio gasto em alimentos: R$${descontoConversao(totalAlimeto/(mesmoTipo(alimentoString).length))}\nValor total gasto em utensílios: R$${descontoConversao(totalUtensilio/(mesmoTipo(utensilioString).length))}`

console.log(saidaConversaoMoeda(carrinho))
console.log(saidaValorTotal)
console.log(totalDesconto)
console.log(saidaFrageis)
console.log(saidaLetra)
console.log(saidaMesmoTipo)