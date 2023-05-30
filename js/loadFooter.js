function importNavbar() {
    var navbarContainer = document.createElement('div');
    navbarContainer.setAttribute('id', 'navbar-container');
  
    fetch('componentes/navbar.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(content) {
        navbarContainer.innerHTML = content;
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