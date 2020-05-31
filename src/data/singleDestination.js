import TurismoAttivoAuth from "./tokenTurismoAttivo";




const querySingle = async (id) => {
    const GET_SINGLE = `
    {
      findOSTById(id: `+id+`, locale: "it")
      {
        id
        name
        descrizione
        type
        geometry {value}
      }
    }
    `;
    return fetch('https://api.turismoattivo.sardegnaturismo.it/api/v1.0/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + TurismoAttivoAuth.getAccessToken()
        },
        body: JSON.stringify({query: GET_SINGLE})
    })
        .then(r => r.json())
        .then(data => {return data["data"]["findOSTById"]});
};

export default querySingle;

