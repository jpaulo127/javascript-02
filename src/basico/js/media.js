function calcularMedia(notas) {
   let soma = 0;
   for( c = 0; c < notas.length; c++) {
       soma += notas[c];
   }
   media = soma / notas.length;

   return media

}

//let media escopo global

function aprovacao(notas) {
    let media = calcularMedia(notas) //escopo local ou escopo da função
    let condicao = media >= 8 ? "aprovado" : "reprocado"

    return 'Media:_' + media + '_Resultado:' + condicao
}


