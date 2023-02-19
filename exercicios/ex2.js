//#2: Crie uma função que devolva o segundo maior número que existe no array, exemplo:Entrada: [1,2,3,4,5,6,7,8]Saída: 7Entrada: [1,2,3,4,5,6,7,8,8,8]Saída: 7

function segundoMaior(arr) {
  let maiorValor = Math.max(...arr)

  for(let i=maiorValor;  i > 0; i--) {
    if (arr.includes(--maiorValor)) {
      return maiorValor
    }
  }

  return 0
}

console.log(segundoMaior([1,2,3,4,5,6,7,8]))
console.log(segundoMaior([16,1,2,3,4,5]))