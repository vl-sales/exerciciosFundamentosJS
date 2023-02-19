//#4: Aproveitando o exercício #1, crie uma classe Carro que contenha os atributos marca, modelo e valor. Adicione nessa class o método toString pra devolver a frase igual ao exercício #1

class Carro {
  
  constructor(marca, modelo, valor){
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor
  }

  toString() {
    return `${this.marca} ${this.modelo} R$${this.valor}`
  }
}

carro = new Carro('Fiat', 'Uno', '50000')
console.log(carro.toString())