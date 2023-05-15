const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')); //Vai ao url buscar o id da atividade

let atividades = JSON.parse(localStorage.getItem("atividades")); 

const atividade = atividades[id]; //Vai buscar a atividade que está na posiçao correspondente ao ID
console.log(atividade);
document.getElementById('categoria').innerText = atividade.categoria; //Coloca o nome da categoria no p que tem o id categoria
document.getElementById('titulo').innerText = atividade.nome;
document.getElementById('preco').innerText = atividade.preco;
document.getElementById('descricao').innerText = atividade.descricao;
document.getElementById('imagem').src = atividade.imagem; //Coloca no src da imagem o link que esta no json 