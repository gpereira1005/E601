let listaAtividades = [{
  "id": "0",
  "categoria": "aereos",
  "imagem": "/imgs/inicio1.png",
  "nome": "Nome atividade",
  "preco": "10", 
  "descricao": "descriçao da atividade"
},
{
  "id": "1",
  "categoria": "aereos",
  "imagem": "/imgs/inicio1.png",
  "nome": "Nome atividade 2",
  "preco": "15", 
  "descricao": "descriçao da atividade"
},
{
  "id": "2",
  "categoria": "aereos",
  "imagem": "/imgs/inicio2.png",
  "nome": "Nome atividade 3",
  "preco": "17", 
  "descricao": "descriçao da atividade"
},
{
  "id": "3",
  "categoria": "terrestres",
  "imagem": "/imgs/inicio1.png",
  "nome": "Nome atividade 4",
  "preco": "125", 
  "descricao": "descriçao da atividade"
},
{
  "id": "4",
  "categoria": "terrestres",
  "imagem": "/imgs/inicio2.png",
  "nome": "Nome atividade 5",
  "preco": "10", 
  "descricao": "descriçao da atividade"
},
{
  "id": "5",
  "categoria": "maritimos",
  "imagem": "/imgs/inicio1.png",
  "nome": "Nome atividade 6",
  "preco": "10", 
  "descricao": "descriçao da atividade"
}
]

localStorage.setItem("atividades", JSON.stringify(listaAtividades));