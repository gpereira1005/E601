// Obter utilizadores do localStorage ou criar array vazio
let utilizadores = JSON.parse(localStorage.getItem("utilizadores"));


function registar(){
    event.preventDefault()
    let username = document.getElementById('username').value;
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(username.length == 0){
        alert('Introduza um username');
        return; 
    }else if(nome.length == 0){
        alert('Introduza um nome');
        return; 
    }else if(!emailValido){
        alert('Introduza um email válido');
        return; 
    }else if(password.length == 0){
        alert('Introduza uma password');
        return; 
    }else if(utilizadores.some(u => u.username === username)){
        alert('Este username não está disponivel');
        return;
    }else if(utilizadores.some(u => u.email === email)){
        alert('Este email já se encontra registado');
        return;
    }else{
        let novo = {"role": "cliente", "username": username, "nome": nome, "email": email, "password": password}
        utilizadores.push(novo); 
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
        alert('A sua conta foi criada');
        window.location.href = "../login.html";
    }
}

// Registar evento de clique no botão de registo 
document.getElementById("registo").addEventListener("click", registar);

