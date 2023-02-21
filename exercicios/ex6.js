//#6: Crie uma classe que representa uma impressora, essa classe deve conter um método chamado "imprime", e deve exibir as informações do carro e informações do tributo.

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

class calculaTributo {
  constructor(){}

  static calcular() {
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

class Impressora{
  constructor(carro) {
    // this.fnTributos = fn
    this.carro = carro
  }
  imprimeInfos() {
    return `${this.marca} ${this.modelo} R$${this.valor} - tributo: ${}`
  }
}

// const carro = new Carro('Fiat', 'Uno', 50000)
// const funcCalcularTributo = calculaTributo.calcular.bind(carro)
// const novaImpressora = new Impressora(funcCalcularTributo)
// console.log(funcCalcularTributo())
// console.log(novaImpressora.imprimeInfos.call(carro))

