let atividades = JSON.parse(localStorage.getItem("atividades")); 

atividades.forEach(atividade => { 
        let html = '<div class="col-md-4">'+
        '<figure class="figure-overlay">'+
            '<a href="atividades.html?id='+atividade.id+'"><img src="'+atividade.thumb+'" class="img-fluid img-hover"></a>'+
            '<figcaption class="bg-dark text-light">Preço por pessoa: '+atividade.preco+'€</figcaption>'+
            '<figcaption class="overlay"><a href="atividades.html?id='+atividade.id+'"><span class="icon"><i class="bi bi-plus-circle-fill fs-2"></i></span></a>Ver Detalhes</figcaption>'+
            '<p>'+atividade.nome+'</p>'+
        '</figure>'+
    '</div>'

        let html2 = '<li><a href="atividades.html?id='+atividade.id+'">'+
           '<span class="ico" style="z-index: 99;">'+
                '<img src='+atividade.icon+' style="width: 20px; height: 20px;"></img>'+
            '</span>'+
            '<span class="info">'+atividade.nome+'</span>'+
        '</a>'+
        '</li>'

        document.getElementById("atividades-inicio").innerHTML += html2;
        
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