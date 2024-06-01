const coluna = document.getElementById('coluna_canva');

new Chart(coluna, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Barreira Financeira (%)',
            backgroundColor: 'black',
            data: [45, 50, 55, 60, 65]
        }, {
            label: 'Falta de Recursos Educacionais Adequados (%)',
            backgroundColor: 'rgb(254, 92, 0',
            data: [35, 38, 40, 42, 45]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function aguardar() {
    console.log('Iniciando aguardar...');
}

function finalizarAguardar() {
    console.log('Finalizando aguardar...');
}

function modal() {
    modal_div.style.display = "block"
}

function fecharModal() {
    modal_div.style.display = "none"
}

function simular() {
    const valor = Number(valor_input.value);
    const recursos = recursos_input.value;
    const recursosSanatizado = recursos.toLowerCase();
    aguardar();

    if (valor == "" || recursos == "") {
        alerta_erro.style.display = 'block'
        mensagem_erro.innerHTML = "Preencha todos os campos para prosseguir";
        finalizarAguardar();
        return false;
    }
    else {
        let total = valor * 1.40;

        if (recursosSanatizado == 'sim') {
            total = valor * 1.95;


            exibir_resultado.innerHTML = `Daqui a 5 anos, o valor que você atualmente paga aumentará em aproximademente <span style="color: #FE5C00;">25%</span> 
            devido a vários fatores, como inflação, aumento nas taxas de juros, e outros. <br>
            Além disso, as dificuldades devido à falta de recursos, que já são um <span style="color: #FE5C00;">problema de 45%</span> atualmente, 
            é estimado que também aumentarão em <span style="color: #FE5C00;">15%</span>, graças a fatores como: aumento nos preços de instrumentos, aumento 
            nos custos de manutenção de instrumentos, etc. Somando tudo, o total que você pagará será de <span style="color: #FE5C00;">R$${total}</span>. <br>
            No entanto, com o projeto Melodias Sem Fronteiras, isso não será um impedimento. Nossa comunidade está unida para manter a música viva e tocando 
            os corações de todos que tiverem o prazer de serem envolvidos por ela. <br> Venha você também fazer parte desse movimento <a style="color: #FE5C00; text-decoration: underline;" onclick="cadastro()">Cadastre-se agora</a>.`;

        } else if (recursosSanatizado == 'não') {

            exibir_resultado.innerHTML = `Daqui a 5 anos, o valor que você atualmente paga aumentará em aproximademente <span style="color: #FE5C00;">25%</span> devido a vários fatores, 
            como inflação, aumento nas taxas de juros, e outros. Além disso, as dificuldades devido à falta de recursos, 
            é estimado que também aumente em <span style="color: #FE5C00;">15%</span>, graças a fatores como: aumento nos preços de instrumentos, aumento 
            nos custos de manutenção de instrumentos, etc. totalizando <span style="color: #FE5C00;"> R$${total}</span>. No entanto, com o projeto Melodias Sem Fronteiras, 
            isso não será um impedimento. Nossa comunidade está unida para manter a música viva e tocando os corações de todos que 
            tiverem o prazer de serem envolvidos por ela.
            Venha você também fazer parte desse movimento <a style="color: #FE5C00; text-decoration: underline;" onclick="cadastro()">Cadastre-se agora</a>`


        } else {
            modal_div.style.display = "none"
            alerta_erro.style.display = 'block'
            mensagem_erro.innerHTML = `${recursos} é uma resposta inválida (resposta deve ser "Sim" ou "Não")`;
            finalizarAguardar();
            return false;
        }

        modal();
        exibir_resultado.innerHTML = `${recursosSim}`
        setInterval(sumirMensagem, 3500)
    }
}

function sumirMensagem() {
    alerta_erro.style.display = 'none'
}

function cadastro() {
    window.location.href = './login_cadastro/cadastro.html'
}

function entrar() {
    window.location.href = './login_cadastro/login.html'
}   

function entrarContato(){
    var nomeVar = nome_input.value;
    var emailVar = email_input.value.toLowerCase();
    var descricaoVar = descricao_input.value;

    fetch("/contato/registrarContato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            descricaoServer: descricaoVar,
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