class movimentacao{
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}
class Registro{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes, 
        this.ano = ano,
        this.movimentacoes = []
    }
    novaMovimentacao(... movimentacoes) {
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
        
    }
    resumo() {
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('/x/', 'gi')
        this.movimentacoes.forEach(lancamento => {
           lancamento.banco = lancamento.banco.replace(regex, 'y')
            if(!lancamento.banco.match(regex)) {
                valorAtualizado += lancamento.saldo
              tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}
const m01 = new movimentacao('00000', 'salario', 20000)
const m02 = new movimentacao('bank y', 'comissao', 2000)
const m03 = new movimentacao('bank y', 'imposto', -5000)
const m04 = new movimentacao('bank x', 'contas', -1000)
const m05 = new movimentacao('bank z', 'imposto', -1000)

const Registro01 = new Registro(22,10,2021)
Registro01.novaMovimentacao(m01, m02, m03, m04, m05)
console.log('o saldo dos registroes' + Registro01.resumo())

const movimentacoesGerais = (m01, m02, m03, m04, m05)
movimentacoesGerais.map( elemento =>{
    console.log(elemento.banco.lengh)
})

