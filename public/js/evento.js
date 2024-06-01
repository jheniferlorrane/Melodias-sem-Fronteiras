const numerosAleatorios = [];
var idUsuario = Number(sessionStorage.ID_USUARIO);
var usuario = sessionStorage.NOME_USUARIO;
var nomeEvento = "Astros sem fronteiras";
let valor = 34.90
let ingresso = '';

function valorIngresso() {
    if (valor == 0) {
        valor = 'Grátis';
        valor_ingresso.innerHTML = `<h3>Ingresso ${valor}</h3> <p style="font-size: 15px; padding: 5px 0px 7px;">Inscrições até 10/12/2024</p>`
    } else {
        valor_ingresso.innerHTML = `<h3>Ingresso R$${valor.toFixed(2)}</h3> <p style="font-size: 15px; padding: 5px 0px 7px;">Inscrições até 10/12/2024 <br>Pague em até 12x</p>`
    }
}

function gerarIngresso() {
    function gerarNumeros() {
        return Math.floor(Math.random() * 10);
    }

    for (let contador = 0; contador < 10; contador++) {
        numerosAleatorios.push(gerarNumeros());
    }
}

function exibir() {
    gerarIngresso();

    let tamanhoLista = numerosAleatorios.length;

    for (let posicao = 0; posicao < tamanhoLista; posicao++) {
        ingresso += `${numerosAleatorios[posicao]}`;
    }

    console.log(ingresso);
    console.log(valor);
    console.log(idUsuario);
    console.log(nomeEvento);

    eventos();
}

function aguardar() {
    console.log('Iniciando aguardar...');
}

function finalizarAguardar() {
    console.log('Finalizando aguardar...');
}

function eventos() {
    aguardar();
    fetch("/eventos/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeEventoServer: nomeEvento,
            valorIngressoServer: valor,
            ingressoServer: ingresso,
            fkUsuarioServer: idUsuario,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}