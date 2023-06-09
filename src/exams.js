import months from './months.js'
// filter meses
const filteredMonths = months.filter( (months)=>{
    return months.days === 30
})

let toPrint = ''

console.log(toPrint)

//listar meses
filteredMonths.forEach(month =>{
    toPrint += month.month + ','
})

// for( let c = 0; c < filtermonths.length; c++){

//}

let meses = [30,30,30] //array comum

//reduce-função com todos os item da array e decolve um valor unico
let sunMonthDay = filteredMonths.reduce( (prev, next)=>{
     return {days: prev.days + next.days}
})
console.log(sunMonthDay)
let cachorro = [10, 15, 7, 8, 9]
// map- funções em array de retono individual (cada valor do array)
let years = cachorro.map( (cachorro =>{
   return cachorro * 7
}))

document.getElementById('main').innerHTML = 
toPrint + '<br> Soma dos dias dos meses selecionados' 
+ sunMonthDay.days 
+ '<br> idade humana dos cachorros' 
+ years + ' '