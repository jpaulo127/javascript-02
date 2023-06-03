window.alert('seja bem vindos')

function calculo() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let media = (a + b + c) / 3;

    document.getElementById("res").innerHTML = "Resultado:" + media
}

function calculoCarro() {

    let valor = parseInt(document.getElementById('valor').value);   
    let parcela = parseInt(document.getElementById('parcela').value);
    let entrada = parseInt(document.getElementById('entrada').value)
    let carro = (valor - entrada) / parcela

//let condicao = valor

if(valor <= 6000){
    document.getElementById('resultado').innerHTML = "Digite o valor do carro" 

}else if(valor >= 6001){

    document.getElementById('resultado').innerHTML = "Seu parcelamento é_" + carro
}
console.log(carro)

}
      document.addEventListener('submit',function(evento) {
       evento.preventDefault();
        evento.stopPropagation();

    
   })

   function velocidadeCarro() {

    let vel = parseInt(document.getElementById('vel').value);
    let via = 60
    if(vel > via){
     document.getElementById('resul').innerHTML = 'A velocidade so seu carro é' + `${vel}km/h.Você esta multado`
  }else if(vel <= via){
     document.getElementById('resul').innerHTML = 'A velocidade do seu carro é de' + ` ${vel}km/h.Não existe multa nesse documento`
  }

}

function destino(){
    let pais = "Brasil"
    let origem = document.getElementById('br')
    let res = document.getElementById('pais')
    res.innerHTML = `seu pais é ${origem}`
    if(pais != origem){
        res.innerHTML += `Voce é BR`
    }else{
        res.innerHTML += `Voce é extrageiro`
    } 
}
         
