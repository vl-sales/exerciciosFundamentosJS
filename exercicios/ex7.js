//#7: Crie um classe responsável por calcular Fibonacci, crie um método nessa classe responsável por efetuar esse cálculo. Mas esse método deve ser um Generator.

// retornar a quantidade pedida
class CalcularFibonacci {

    *calcula(i) {
        let n1;
        let n2;
        let fibo = [0]
        while(fibo.length < i + 1) {
            let ultimoIndex = fibo.length - 1
            
            n1 = fibo[ultimoIndex]
            n2 = fibo[ultimoIndex - 1] === undefined ? 1 : fibo[ultimoIndex - 1]
            
            let proximoValor = n1 + n2
            yield n1
            fibo.push(proximoValor)
        }
    }
}

const fibo = new CalcularFibonacci()
func = fibo.calcula(3)
console.log(func.next().value)
console.log(func.next().value)
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
