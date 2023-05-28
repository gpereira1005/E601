let listaReservas = [
    {
      "id_atividade": "1",
      "id_cliente": "5",
      "dataReserva": "2023-05-22",
      "horaInicio": "09:00",
      "horaFim": "10:00",
      "continuidade": "Única",
      "n_pessoas": "5",
      "observacoes": "",
      "responsavel": {
        "nome": "Gonçalo",
        "email": "a@a.com",
        "telefone": "966998214",
        "dataNascimento": "10/05/2002"
      },
      "dadosFaturacao": {
        "morada": "AAA",
        "numeroUtente": "111",
        "numeroContribuinte": "2222",
        "codigoPostal": "33333"
      },
      "usarTelefoneResponsavel": false,
      "usarEmailResponsavel": true,
      "funcResponsavel": "2"
    },
    {
      "id_marcacao": "2",
      "id_atividade": "3",
      "id_cliente": "8",
      "dataReserva": "2023-05-23",
      "horaInicio": "14:00",
      "horaFim": "16:00",
      "continuidade": "Repetida",
      "n_pessoas": "3",
      "observacoes": "Alergia a frutos do mar",
      "responsavel": {
        "nome": "Maria",
        "email": "b@b.com",
        "telefone": "912345678",
        "dataNascimento": "15/08/1990"
      },
      "dadosFaturacao": {
        "morada": "BBB",
        "numeroUtente": "333",
        "numeroContribuinte": "4444",
        "codigoPostal": "55555"
      },
      "usarTelefoneResponsavel": true,
      "usarEmailResponsavel": true,
      "funcResponsavel": "1"
    },
    {
      "id_marcacao": "3",
      "id_atividade": "2",
      "id_cliente": "12",
      "dataReserva": "2023-05-24",
      "horaInicio": "10:30",
      "horaFim": "11:30",
      "continuidade": "Única",
      "n_pessoas": "2",
      "observacoes": "",
      "responsavel": {
        "nome": "Pedro",
        "email": "c@c.com",
        "telefone": "923456789",
        "dataNascimento": "25/03/1985"
      },
      "dadosFaturacao": {
        "morada": "CCC",
        "numeroUtente": "555",
        "numeroContribuinte": "6666",
        "codigoPostal": "77777"
      },
      "usarTelefoneResponsavel": true,
      "usarEmailResponsavel": false,
      "funcResponsavel": "3"
    }
  ]
  
export default listaReservas; 