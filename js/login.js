let utilizadores = JSON.parse(localStorage.getItem("utilizadores"));


function login() {
    event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  let utilizador = utilizadores.find(u => u.username === username);
  
  if (!utilizador) {
    alert('Nome de usuário ou senha inválidos');
    return;
  }

  // Verificar se a senha está correta
  if (utilizador.password !== password) {
    alert('Password incorreta');
    return;
  }

  localStorage.setItem("utilizadorLigado", JSON.stringify(utilizador)); 

  if(utilizador.role === "admin"){
    window.location.href = "https://univminho.github.io/E601_BO/";
  } else {
    window.location.href = "../index.html";
  }
  
}

document.getElementById("login").addEventListener("click", login);
