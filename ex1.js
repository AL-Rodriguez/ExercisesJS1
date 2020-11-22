const numbers = []
const rangeMinArray = 2
const rangeMaxArray =20

const getRange =(min,max) => range = Math.floor(Math.random()*(max-min))+min

const createArray = (min,max) =>{

    let range =getRange(rangeMinArray,rangeMaxArray)
    let i=1

    while(i<=range){
        let randomNumber = Math.floor(Math.random()*(max-min))+min
        numbers.push(randomNumber)
        i++
    }
}
createArray(0,100)

console.log (`El Array creado de rango ${numbers.length} es ${numbers}`)

//Solution 1: indexOf vs lastIndexOf

const repeatedNumbers = (arrayNumbers) =>{
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers.indexOf(arrayNumbers[i]) !== arrayNumbers.lastIndexOf(arrayNumbers[i])) {
          return true
        }
      }
      return false
}

console.log(`Números repetidos es ${repeatedNumbers(numbers)}`)

//Solution 2:filter

const checking = numbers.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  })

console.log(`Hay números repetidos es ${checking.length!==numbers.length}`)