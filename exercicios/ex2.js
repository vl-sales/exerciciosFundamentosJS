//#2: Crie uma função que devolva o segundo maior número que existe no array, exemplo:Entrada: [1,2,3,4,5,6,7,8]Saída: 7Entrada: [1,2,3,4,5,6,7,8,8,8]Saída: 7

function segundoMaior(arr) {
  let arrOrdenado = arr.sort((n1, n2) => n1 - n2);
  arrOrdenado = Array.from(new Set(arrOrdenado));

  console.log(arrOrdenado)
  return arrOrdenado[arrOrdenado.length - 2]
}

console.log(segundoMaior([1,2,2,8,3,4,5,6,7,8]))
console.log(segundoMaior([16,1,2,3,4,5]))