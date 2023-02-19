// #3: Crie uma função que devolva o nome do dia semana baseado em uma data, por exemplo:10/02/2023 -> Friday

const enumDiasDaSemana = {
  0: 'Domingo',
  1: 'Segunda',
  2: 'Terça',
  3: 'Quarta',
  4: 'Quinta',
  5: 'Sexta',
  6: 'Sábado'
}

function diaDaSemana(data) {
  const arrData = data.split('/')
  const numDiaDaSemana = new Date(arrData[2], arrData[1]-1, arrData[0]).getDay()
  return enumDiasDaSemana[numDiaDaSemana]
}

console.log(diaDaSemana('13/02/2023'))