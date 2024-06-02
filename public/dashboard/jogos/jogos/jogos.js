
let pontuacaoAtual = 0;
var idUsuario = Number(sessionStorage.ID_USUARIO);

function aguardar() {
    console.log('Iniciando aguardar...');
}

function finalizarAguardar() {
    console.log('Finalizando aguardar...');
}

function salvarPontuacao() {
    aguardar();
    fetch("/pontuacao/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pontuacaoServer: pontuacaoAtual,
            fkUsuarioServer: idUsuario,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            finalizarAguardar();
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}