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
            let recursosSim = ""
            if(recursosSanatizado == 'sim'){
                recursosSim = valor * 1.45;
            }else if(recursosSanatizado == 'não'){
                recursosSim = valor;
            }else{
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
        window.location.href = './login e cadastro/cadastro.html'
    }

    function entrar() {
        window.location.href = './login e cadastro/login.html'
    }   