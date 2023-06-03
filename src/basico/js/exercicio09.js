const calcularMedia = (notas) => {
    let soma = 0;
    for (let c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    let media = soma / notas.length;

    return media;
};

let media;

const aprovacao = (notas) => {
    let media = calcularMedia(notas);

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;
};

const contagemRegressiva = (numero) => {
    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);
};

const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', (evento) => {

        evento.preventDefault();
        evento.stopPropagation();

        if (formulario1.getAttribute('class').match(/erro/)) {
            return false;
        }

        let dados = new FormData(formulario1);

        let notas = [];

        for (let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if (!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });
}

const validaCampo = (elemento) => {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        if (this.value == "") {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

const validaCampoNumerico = (elemento) => {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if (numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

const validaEmail = (elemento) => {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if (this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

const validauf = (elemento) => {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const unidadevalida = /^[a-z]{2}$/;

        if (this.value.match(unidadevalida)) {
            document.querySelectorAll('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'Verifique os preenchimentos dos campos em vermelho ';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
};

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposuf = document.querySelectorAll('input.uf');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for (let emFoco of camposuf) {
    validauf(emFoco);
}


/**
 * o codigo original utiliza principalmente funcões tradicinais
 * em vez de arrow functions. A conversão para arrow functions 
 * pode simplificar a sintaxe tornar o codigo mais conciso.
 * Em geral,a versão modificada do codigo apresenta melhorias 
 * significaticas em termos de clareza ,organização e legibilidade
 */