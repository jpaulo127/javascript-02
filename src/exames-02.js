import carros from './car.js'

const filtercarros = carros.filter( (carros)=>{
    return carros.year === 2023
})

let toPrint = ''

console.log(toPrint)


filtercarros.forEach(car =>{
    toPrint += car.car + ','
})

//let meses = [30,30,30] //array comum

//reduce-função com todos os item da array e decolve um valor unico
let suncarYear= filtercarros.reduce( (prev, next)=>{
     return {year: prev.year + next.year}
})
console.log(suncarYear)
// map- funções em array de retono individual (cada valor do array)
let car = carros.map( (km =>{
   return car.km * 7
}))

document.getElementById('master').innerHTML = 
toPrint + '<br> Soma dos anos dos carros selecionados' 
+ suncarYear.year
+ '<br> a quilemetragem de todos os carros' 
+ car + ' '