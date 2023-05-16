let atividades = JSON.parse(localStorage.getItem("atividades")); 

atividades.forEach(atividade => { 
        let html = '<div class="col-md-4">'+
                        '<figure>'+
                        '<a href="atividades.html?id='+atividade.id+'"><img src="'+atividade.thumb+'" class="img-fluid"></a>'+
                            '<figcaption class="bg-dark text-light">Desde '+atividade.preco+' pax</figcaption>'+
                            '<p>'+atividade.nome+'</p>'+
                        '</figure>'+
                    '</div>';
        
        if(atividade.categoria == "maritimos"){
            document.getElementById("maritimos").innerHTML += html;
        }else if(atividade.categoria == "terrestres"){
            document.getElementById("terrestres").innerHTML += html;
        }else{
            document.getElementById("aereos").innerHTML += html;
        }
      //console.log(atividade.nome);
    });

    //console.log(lista);
    //document.getElementById("maritmos").innerHTML = lista;
    //document.getElementById("maritmos").innerHTML