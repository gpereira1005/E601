import listaAtividades from './atividades.js';
import listaPedidos from './pedidos.js';
import listaReservas from './reservas.js';
import listaUtilizadores from './utilizadores.js';


if(!localStorage.getItem('atividades')){
    localStorage.setItem("atividades", JSON.stringify(listaAtividades));
}

if(!localStorage.getItem('pedidos')){
    localStorage.setItem("pedidos", JSON.stringify(listaPedidos));
}

if(!localStorage.getItem('reservas')){
    localStorage.setItem("reservas", JSON.stringify(listaReservas));
}

if(!localStorage.getItem('utilizadores')){
    localStorage.setItem("utilizadores", JSON.stringify(listaUtilizadores));
}

if(!localStorage.getItem('contactos')){
    let lista = []
    localStorage.setItem("contactos", JSON.stringify(lista))
}
