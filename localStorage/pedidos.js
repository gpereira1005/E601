let listaPedidos = [
    {
      "id_marcacao": "4",
      "id_atividade": "1",
      "id_cliente": "6",
      "dataReserva": "2023-05-25",
      "horaInicio": "16:00",
      "horaFim": "17:00",
      "continuidade": "Única",
      "n_pessoas": "4",
      "observacoes": "Necessidade de cadeira de rodas",
      "responsavel": {
        "nome": "João",
        "email": "d@d.com",
        "telefone": "987654321",
        "dataNascimento": "03/12/1998"
      },
      "dadosFaturacao": {
        "morada": "DDD",
        "numeroUtente": "777",
        "numeroContribuinte": "8888",
        "codigoPostal": "99999"
      },
      "usarTelefoneResponsavel": false,
      "usarEmailResponsavel": true,
    },
    {
      "id_marcacao": "5",
      "id_atividade": "2",
      "id_cliente": "10",
      "dataReserva": "2023-05-26",
      "horaInicio": "11:00",
      "horaFim": "12:00",
      "continuidade": "Única",
      "n_pessoas": "1",
      "observacoes": "",
      "responsavel": {
        "nome": "Ana",
        "email": "e@e.com",
        "telefone": "945678912",
        "dataNascimento": "20/06/1975"
      },
      "dadosFaturacao": {
        "morada": "EEE",
        "numeroUtente": "999",
        "numeroContribuinte": "1111",
        "codigoPostal": "22222"
      },
      "usarTelefoneResponsavel": true,
      "usarEmailResponsavel": true,
    },
    {
      "id_marcacao": "6",
      "id_atividade": "3",
      "id_cliente": "15",
      "dataReserva": "2023-05-27",
      "horaInicio": "13:30",
      "horaFim": "15:30",
      "continuidade": "Repetida",
      "n_pessoas": "6",
      "observacoes": "Restrições alimentares: vegetariano",
      "responsavel": {
        "nome": "Sara",
        "email": "f@f.com",
        "telefone": "976543219",
        "dataNascimento": "12/09/1995"
      },
      "dadosFaturacao": {
        "morada": "FFF",
        "numeroUtente": "222",
        "numeroContribuinte": "3333",
        "codigoPostal": "44444"
      },
      "usarTelefoneResponsavel": true,
      "usarEmailResponsavel": false,
    }
]


export default listaPedidos;