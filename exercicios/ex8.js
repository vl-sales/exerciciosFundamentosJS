//#8 Crie um classe responsável por armazenar Carros (#4), essa classe deve conter os métodos: adiciona, atualiza, remove e lista, onde:  adiciona deve adicionar um carro em memória  atualiza deve atualizar um carro que exista em memória remove deve remove um carro que exista em memória lista deve retornar todos os carros que estão cadastrados

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

class Carros {
    constructor() {
        this.listaDeCarros = {}
        this._ultimoId = 0
    }

    adiciona(carro) {
        this._ultimoId++
        this.listaDeCarros[this._ultimoId] = carro;
    }

    atualiza(id, novoCarro) {
        this.listaDeCarros[id] = novoCarro
    }

    deleta(id) {
        delete this.listaDeCarros[id]
        if (Object.keys(this.listaDeCarros).length > 0) {

            const chavesEValores = Object.entries(this.listaDeCarros)
            const valoresASeremAlterados = chavesEValores.slice(id-1)
            
            valoresASeremAlterados.forEach((arr) => {
                this.listaDeCarros[arr[0] - 1] = arr[1]
                delete this.listaDeCarros[arr[0]]
            })
        }
    }

    lista() {
        return {...this.listaDeCarros}
    }
}

const lista = new Carros()
const carro = new Carro('Fiat', 'Uno', 50000)
const carro2 = new Carro('Fiat', 'dasdas', 40000)
const carro3 = new Carro('Fiat', 'dadasdasdas', 30000)

lista.adiciona(carro)
lista.adiciona(carro2)
lista.adiciona(carro3)
console.log(lista.lista())

const carro4 = new Carro('Fiat', 'ertfsd', 20000)
lista.atualiza(2, carro4)
console.log(lista.lista())

lista.deleta(2)
console.log(lista.lista())
