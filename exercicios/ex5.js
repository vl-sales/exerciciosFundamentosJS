//#5: Crie uma classe que calcule o tributo de um Carro baseado no preço, regras do tributo:Preço do carro < 20000, tributo será 6% do valor do carroPreço do carro < 40000, tributo será de 5% do valor do carroPreço do carro > 40000, tributo será de 4% do valor do carro

class Carro {
  
  constructor(marca, modelo, valor){
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor
  }
  
  toString() {
    return `${this.marca} ${this.modelo} R$${this.valor}`
  }

  calculaTributo() {
    if (this.valor < 20000) {
      return this.valor * .06
    } 
    else if (this.valor < 40000){
      return this.valor * .05
    } 
    else {
      return this.valor * .04
    }
  }
}

carro = new Carro('Fiat', 'Uno', 50000)
console.log(carro.calculaTributo())
console.log(carro.toString())