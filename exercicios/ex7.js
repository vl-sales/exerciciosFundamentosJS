//#7: Crie um classe responsável por calcular Fibonacci, crie um método nessa classe responsável por efetuar esse cálculo. Mas esse método deve ser um Generator.

// retornar a quantidade pedida
class CalcularFibonacci {

    *calcula(i) {
        let fibo = [0, 1]
        let primeiroRetorno = yield 1
        while(fibo.length < i) {
            let ultimoIndex = fibo.length - 1
            let retorno = yield fibo[ultimoIndex]

            let proximoValor = fibo[ultimoIndex] + fibo[ultimoIndex - 1]
            fibo.push(proximoValor)
        }
    }
}

const fibo = new CalcularFibonacci()
func = fibo.calcula(2)
console.log(func.next().value)
console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
// console.log(func.next().value)
