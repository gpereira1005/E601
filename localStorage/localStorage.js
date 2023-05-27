/*
* Inluir menos coisas (meter so as mais importantes)
* Meter preço por pessoa (assim podemos meter ao fazer uma marcação ele calcular o preço com base no nº pessoas)
*/
import listaAtividades from './atividades.js';
import listaPedidos from './pedidos.js';
import listaReservas from './reservas.js';
import listaUtilizadores from './utilizadores.js';

localStorage.setItem("atividades", JSON.stringify(listaAtividades));
localStorage.setItem("pedidos", JSON.stringify(listaPedidos));
localStorage.setItem("reservas", JSON.stringify(listaReservas));
localStorage.setItem("utilizadores", JSON.stringify(listaUtilizadores));
