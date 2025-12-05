
const  firstList = [1, 2, 3]

const  secondList = [4, 5, 6]

const  thirdList = firstList.concat(secondList)

  

console.log(thirdList) // [1, 2, 3, 4, 5, 6]



const  fruits = ['banana', 'orange', 'mango', 'lemon'] // meyveler dizisi

const  vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // sebzeler dizisi

const  fruitsAndVegetables = fruits.concat(vegetables) // iki diziyi birleştirdik

  

console.log(fruitsAndVegetables)


const  numbers = [1, 2, 3, 4, 5]

  

console.log(numbers.indexOf(5)) // -> 4

console.log(numbers.indexOf(0)) // -> -1

console.log(numbers.indexOf(1)) // -> 0

console.log(numbers.indexOf(6)) // -> -1