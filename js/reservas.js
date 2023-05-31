let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let nL = document.getElementById('naoLogado');
let voltarDados = document.getElementById('voltarDados');
let voltarResponsavel = document.getElementById('voltarResponsavel');
let voltarFaturacao = document.getElementById('voltarFaturacao');
let confirmacao = document.getElementById('confirmacao');
let confirmarReserva = document.getElementById('confirmarReserva');
let pedidoEfetuado = document.getElementById('pedidoEfetuado');
let atividade = document.getElementById('atividade');
let utilizadorLigado = JSON.parse(localStorage.getItem('utilizadorLigado'));

let data1 = {};
let data2 = {};
let data3 = {};
let custo = 0;

let atividades = JSON.parse(localStorage.getItem('atividades'));

document.addEventListener('DOMContentLoaded', function () {
    let atividades = JSON.parse(localStorage.getItem('atividades'));
    atividades.forEach((a) => {
        const optionElement = document.createElement("option");
        optionElement.text = a.nome;
        optionElement.value = a.id;
        atividade.add(optionElement);
    })
    let utilizadorLigado = JSON.parse(localStorage.getItem('utilizadorLigado'));
    if (utilizadorLigado) {
        form1.style.display = 'block';
    } else {
        form1.style.display = 'none';
        nL.style.display = 'block';
    }
});

form1.addEventListener('submit', function (event) {
    event.preventDefault();
    let valido = validarForm(form1);
    console.log(valido)
    if (valido) {
        data1 = getFormData(form1.elements)
        console.log(data1);
        form1.style.display = 'none';
        form2.style.display = 'block';
    } else {
        alert("Preencha todos os campos")
    }
});

form2.addEventListener('submit', function (event) {
    event.preventDefault();
    let valido = validarForm(form2);
    if (valido) {
        data2 = getFormData(form2.elements)
        console.log(data2);
        form2.style.display = 'none';
        form3.style.display = 'block';
    } else {
        alert("Preencha todos os campos");
    }
});

form3.addEventListener('submit', function (event) {
    event.preventDefault();
    let valido = validarForm(form3);
    if(valido){
        data3 = getFormData(form3.elements)
        console.log(data3);
        form3.style.display = 'none';
        confirmacao.style.display = 'block';
        custo = calcPreco(data1.idAtividade, data1.numPessoas, data1.horaInicio, data1.horaFim)
        let atividade = atividades.find(u => u.id === data1.idAtividade);
        document.getElementById('confirmAtividade').innerText = atividade.nome;
        document.getElementById('confirmParticipantes').innerText = data1.numPessoas;
        document.getElementById('confirmPreco').innerText = custo;
        document.getElementById('confirmData').innerText = data1.dataReserva;
        document.getElementById('confirmContinuidade').innerText = data1.continuidade;
        document.getElementById('confirmHoraInicio').innerText = data1.horaInicio;
        document.getElementById('confirmHoraFim').innerText = data1.horaFim;
        console.log("Preco calculado")
    }else{
        alert("Preencha todos os campos")
    }

});

voltarDados.addEventListener('click', function (event) {
    event.preventDefault()
    form2.style.display = 'none';
    form1.style.display = 'block';
    preencherForm(form1, data1);
})

voltarResponsavel.addEventListener('click', function (event) {
    event.preventDefault()
    form3.style.display = 'none';
    form2.style.display = 'block';
    preencherForm(form2, data2);
})

voltarFaturacao.addEventListener('click', function (event) {
    event.preventDefault()
    confirmacao.style.display = 'none';
    form3.style.display = 'block';
    preencherForm(form3, data3);
})

confirmarReserva.addEventListener('click', function (event) {
    event.preventDefault()
    let pedido = {}
    pedido = data1;
    pedido.responsavel = data2;
    pedido.dadosFaturacao = data3;
    pedido.preco = custo;
    pedido.cliente = utilizadorLigado.id
    console.log(pedido)
    let pedidos = JSON.parse(localStorage.getItem('pedidos'));
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    confirmacao.style.display = 'none';
    pedidoEfetuado.style.display = 'block';

})

const getFormData = (idForm) => {
    let data = {};
    for (const element of idForm) {
        if (element.name.length > 0) {
            if (element.tagName === 'SELECT') {
                if (element.selectedIndex !== -1) {
                    data[element.name] = element.options[element.selectedIndex].value;
                }
            } else {
                data[element.name] = element.value; // Guarda na variável data os dados dos outros elementos
            }
        }
    }
    return data;
};

const validarForm = (form) => {
    // Obtém todos os campos do formulário
    const inputs = form.querySelectorAll('input, select');

    // Define uma variável para controlar se todos os campos estão preenchidos
    let valido = true;

    // Verifica cada campo se está preenchido ou não
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            valido = false;
        }
    });

    return valido;
}

const preencherForm = (idForm, jsonData) => {
    let formElements = idForm.elements;

    for (const element of formElements) {
        if (element.name.length > 0 && jsonData.hasOwnProperty(element.name)) {
            if (element.tagName === 'SELECT') {
                for (let i = 0; i < element.options.length; i++) {
                    if (element.options[i].value === jsonData[element.name]) {
                        element.selectedIndex = i;
                        break;
                    }
                }
            } else {
                element.value = jsonData[element.name];
            }
        }
    }
};

const calcPreco = (idAtiv, numPessoas, horaInicio, horaFim) => {
    let atividades = JSON.parse(localStorage.getItem("atividades"));
    let ativ = atividades.find(a => a.id === idAtiv);
    horaI = horaInicio.split(':');
    horaF = horaFim.split(':');
    console.log("Preco:" + ativ.preco)
    console.log("Pessoas:" + numPessoas)
    console.log("inico:" + horaF[0])
    console.log("fim:" + horaI[0])
    let preco = ativ.preco * numPessoas * (horaF[0] - horaI[0]);
    return preco;
}