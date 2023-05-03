const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')); //Vai ao url buscar o id da atividade

fetch('atividades.json')
    .then(response => response.json())
    .then(data => { //Guarda cada atividade que existe no ficheiro na variavel data (é um array com cada atividade)
        const atividade = data[id]; //Vai buscar a atividade que está na posiçao correspondente ao ID
        document.getElementById('categoria').innerText = atividade.categoria; //Coloca o nome da categoria no p que tem o id categoria
        document.getElementById('titulo').innerText = atividade.nome;
        document.getElementById('preco').innerText = atividade.preco;
        document.getElementById('descricao').innerText = atividade.descricao;
        document.getElementById('imagem').src = atividade.imagem; //Coloca no src da imagem o link que esta no json 
    })
    .catch(error => console.error(error));