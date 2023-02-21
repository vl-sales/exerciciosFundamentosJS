// #3: Crie uma função que devolva o nome do dia semana baseado em uma data, por exemplo:10/02/2023 -> Friday

function diaDaSemana(data) {
  const arrData = data.split('/')
  const diaDaSemana = new Date(arrData[2], arrData[1]-1, arrData[0]).toLocaleDateString('pt-BR', {weekday: 'long'})
  return diaDaSemana
}

console.log(diaDaSemana('19/02/2023'))