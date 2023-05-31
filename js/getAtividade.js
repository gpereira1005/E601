const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')); //Vai ao url buscar o id da atividade

let atividades = JSON.parse(localStorage.getItem("atividades"));

const atividade = atividades[id]; //Vai buscar a atividade que está na posiçao correspondente ao ID
console.log(atividade);
document.getElementById('fotoinicial').style.backgroundImage = 'url('+atividade.thumb+')';
document.getElementById('categoria').innerText = atividade.nome; //Coloca o nome da categoria no p que tem o id categoria
document.getElementById('nome').innerText = atividade.nome;
document.getElementById('regiao').innerText = atividade.regiao;
document.getElementById('dificuldade').innerText = atividade.dificuldade;
document.getElementById('descricao').innerText = atividade.descricao;
document.getElementById('imagem').src = atividade.imagem; //Coloca no src da imagem o link que esta no json
let prog = atividade.programa;
console.log(prog)
console.log(prog.length)
for (let i = 0; i < prog.length; i++) {
    console.log(prog[i])
    document.getElementById('programa').innerHTML += prog[i] + '<br>'
}
document.getElementById('inclui').innerText = atividade.inclui;
document.getElementById('trazer').innerText = atividade.trazer;
document.getElementById('preco').innerText = atividade.preco;
document.getElementById('extra').innerText = atividade.extra;