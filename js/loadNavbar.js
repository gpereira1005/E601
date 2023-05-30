const naoLogado = '<li class="nav-item">'+
                    '<a class="nav-link" href="login.html">Login</a>'+
                  '</li>';
const logado = '<li class="nav-item dropdown">'+
'<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>'+
'<ul class="dropdown-menu nav-drop" aria-labelledby="navbarDropdown">'+
  '<li><a class="dropdown-item drop-item" href="minhasReservas.html">Reservas</a></li>'+
  '<li><hr class="dropdown-divider"></li>'+
  '<li><a class="dropdown-item drop-item" id="logout" href="#">Logout</a></li>'+
'</ul>'+
'</li>';

function importNavbar() {
    var navbarContainer = document.createElement('div');
    navbarContainer.setAttribute('id', 'navbar-container');
  
    fetch('componentes/navbar.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(content) {
        navbarContainer.innerHTML = content;
        let utilizadorLigado = JSON.parse(localStorage.getItem("utilizadorLigado"));
        if(utilizadorLigado){
          document.getElementById('isLogged').innerHTML = logado;
          document.getElementById('navbarDropdown').innerText = utilizadorLigado.nome;
          document.getElementById('logout').addEventListener("click", logout);
        }else{
          document.getElementById('isLogged').innerHTML = naoLogado;
        }
      })
      .catch(function(error) {
        console.log('Erro ao carregar a navbar:', error);
      });
  
    document.body.insertBefore(navbarContainer, document.body.firstChild);
  }
  
  window.addEventListener('DOMContentLoaded', importNavbar);

  function logout(){
    localStorage.removeItem('utilizadorLigado');
    window.location.href = "../index.html";
  }