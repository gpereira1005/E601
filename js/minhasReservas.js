let reservas = JSON.parse(localStorage.getItem('reservas'));
let pedidos = JSON.parse(localStorage.getItem('pedidos'));
let utilizadorLigado = JSON.parse(localStorage.getItem('utilizadorLigado'));

let atividades = JSON.parse(localStorage.getItem('atividades'));

let tabelaPedidos = document.getElementById("tabela-pedidos");
let tabelaReservas = document.getElementById("tabela-reservas");
let tbodyPedidos = tabelaPedidos.getElementsByTagName("tbody")[0];
let tbodyReservas = tabelaReservas.getElementsByTagName("tbody")[0];

// Obtém todos os itens do grupo de lista
let listGroupItems = document.querySelectorAll('.list-group-item');

// Percorre cada item do grupo de lista e adiciona o evento de clique
listGroupItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Obtém a tabela alvo
    let target = this.getAttribute('data-target');

    // Obtém todas as tabelas
    let tabelas = document.querySelectorAll('.tabelaPessoal');

    // Esconde todas as tabelas
    tabelas.forEach(function(tabela) {
      tabela.style.display = 'none';
    });

    listGroupItems.forEach(function(item) {
        item.classList.remove('active');
      });

    // Exibe a tabela correspondente ao alvo (target)
    let tabelaAlvo = document.getElementById('tabela-' + target);
    if (tabelaAlvo) {
      tabelaAlvo.style.display = 'block';
      this.classList.add('active');
    }
  });
});

for (let i = 0; i < pedidos.length; i++) {
    let row = document.createElement("tr");

    let idCell = document.createElement("td");
    idCell.textContent = pedidos[i].id;
    row.appendChild(idCell);

    let atividade = atividades.find(u => u.id === pedidos[i].idAtividade);

    let atividadeCell = document.createElement("td");
    atividadeCell.textContent = atividade.nome;
    row.appendChild(atividadeCell);

    let dataCell = document.createElement("td");
    dataCell.textContent = pedidos[i].dataReserva;
    row.appendChild(dataCell);

    let horarioCell = document.createElement("td");
    horarioCell.textContent = pedidos[i].horaInicio + '-' + pedidos[i].horaFim ;
    row.appendChild(horarioCell);

    let precoCell = document.createElement("td");
    precoCell.textContent = pedidos[i].preco;
    row.appendChild(precoCell);

    tbodyPedidos.appendChild(row);
}

for (let i = 0; i < reservas.length; i++) {
    let row = document.createElement("tr");

    let idCell = document.createElement("td");
    idCell.textContent = reservas[i].id;
    row.appendChild(idCell);

    let atividade = atividades.find(u => u.id === reservas[i].idAtividade);

    let atividadeCell = document.createElement("td");
    atividadeCell.textContent = atividade.nome;
    row.appendChild(atividadeCell);

    let dataCell = document.createElement("td");
    dataCell.textContent = reservas[i].dataReserva;
    row.appendChild(dataCell);

    let horarioCell = document.createElement("td");
    horarioCell.textContent = reservas[i].horaInicio + '-' + reservas[i].horaFim ;
    row.appendChild(horarioCell);

    let precoCell = document.createElement("td");
    precoCell.textContent = reservas[i].preco;
    row.appendChild(precoCell);

    let estadoCell = document.createElement("td");
    estadoCell.textContent = reservas[i].estado;
    row.appendChild(estadoCell);

    tbodyReservas.appendChild(row);
}
