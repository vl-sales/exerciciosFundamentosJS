//#6: Crie uma classe que representa uma impressora, essa classe deve conter um método chamado "imprime", e deve exibir as informações do carro e informações do tributo.

class Carro {
  
    constructor(marca, modelo, valor){
      this.marca = marca;
      this.modelo = modelo;
      this.valor = valor
      this.tributo = this.calculaTributo()
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

class Impressora {
  static imprimeInfos() {
    return `${this.marca} ${this.modelo} R$${this.valor} - tributo: ${this.tributo}`
  }
}

carro = new Carro('Fiat', 'Uno', 50000)

console.log(Impressora.imprimeInfos.call(carro))

