//#1: Transforme a essa frase: "Fiat Uno R$50.000,00" no objeto:{  marca: "Fiat",  modelo: "Uno",  valor: 50000}

function transformarEmObjeto(str) {
  let preco = str.match(/(?<=R\$)[0-9.]*/)[0]
  preco = parseInt(preco.replace('.', ''))
  
  const strArray = str.split(' ')
  console.log(strArray)
  const marca = strArray[0]
  const modelo = strArray[1]
  
  return {
    marca: marca,
    modelo: modelo,
    valor: preco
  }

}

console.log(transformarEmObjeto("Fiat Uno R$50.000,00"))