import getcarros from './car.js'

const carros = getcarros()

const filtercarros = carros.filter( (carros)=>{
    return carros.year === 2023
})

let toPrint = ''

console.log(toPrint)


filtercarros.forEach(car =>{
    toPrint += car.car + ','
})

let suncarYear= filtercarros.reduce( (prev, next)=>{
     return {year: prev.year + next.year}
})
console.log(suncarYear)

let car = carros.map( (km =>{
   return car.km * 7
}))

document.getElementById('master').innerHTML = 
toPrint + '<br> Soma dos anos dos carros selecionados' 
+ suncarYear.year
+ '<br> a quilemetragem de todos os carros' 
+ car + 'km '


