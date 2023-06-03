function pessoa() {
    this.idade =0
    
    setInterval(() => {
        console.log(this.idade++)   
    }, 2000)
}
const p1 = new pessoa()

/*
 * arrow Function
 * (p1, p2) => {expressãp}
 * (p1, p2) => expressão
 * p1 => {expressao}
 */