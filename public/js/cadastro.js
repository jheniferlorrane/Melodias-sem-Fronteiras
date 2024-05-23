function voltar(){
    window.location.href = '../index.html'
}

function aguardar() {
    console.log('Iniciando aguardar...');
}

function finalizarAguardar() {
    console.log('Finalizando aguardar...');
}

function cadastrar() {
    aguardar();
    var nomeVar = nome_input.value;
    var sobrenomeVar = sobrenome_input.value;
    var emailVar = email_input.value.toLowerCase();
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    const indiceArroba = emailVar.indexOf("@");

    nomeVar = nomeVar[0].toUpperCase() + nomeVar.substring(1);
    sobrenomeVar = sobrenomeVar[0].toUpperCase() + sobrenomeVar.substring(1);

    if (
        nomeVar == "" ||
        sobrenomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        alerta_erro.style.display="block";
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Preencha os campos em branco";

        finalizarAguardar();
        return false;
    } else if (confirmacaoSenhaVar != senhaVar) {
        alerta_erro.style.display="block";
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "Senhas não conferem.";

        finalizarAguardar();
        return false;
    } else if (indiceArroba == -1) {
        alerta_erro.style.display="block";
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "Digite um email válido!";

        finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 900);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            sobrenomeServer: sobrenomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardCadastrado.style.display = "block";

                mensagem_cadastrado.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                limparFormulario();
                finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}

function sumirMensagem() {
    alerta_erro.style.display = 'none'
}