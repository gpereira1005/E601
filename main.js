fetch('atividades.json')
  .then(response => response.json())
  .then(data => {
    // O arquivo foi lido e transformado em objeto JavaScript.
    // Agora, podemos acessar os dados como um array, por exemplo:
    data.forEach(atividade => { 
        let html = '<div class="col-md-4">'+
                        '<figure>'+
                        '<a href="atividades.html?id='+atividade.id+'"><img src="'+atividade.imagem+'" class="img-fluid"></a>'+
                            '<figcaption class="bg-dark text-light">Desde '+atividade.preco+' pax</figcaption>'+
                            '<p>'+atividade.nome+'</p>'+
                        '</figure>'+
                    '</div>';
        
        if(atividade.categoria == "maritimos"){
            document.getElementById("maritimos").innerHTML += html;
            console.log("funcionou")
        }else if(atividade.categoria == "terrestres"){
            document.getElementById("terrestres").innerHTML += html;
            console.log("funcionou")
        }else{
            document.getElementById("aereos").innerHTML += html;
            console.log("funcionou")
        }
      //console.log(atividade.nome);
    });

    //console.log(lista);
    //document.getElementById("maritmos").innerHTML = lista;
    //document.getElementById("maritmos").innerHTML
  })
  .catch(error => console.error(error));