import TurismoAttivoAuth from "./tokenTurismoAttivo";
import filterState from "../components/search/filterState";


const Query = async () => {
    const GET_LOCATIONS = `
        {
          queryOst(page: 0, type: "`+filterState.getType()+`", fulltext: "`+filterState.getText()+`", locale: "it", count: 20, geoQuery: {
             type: "envelope",
            values: [
                 [9.073333740234377, 40.5621007],
                 [10.290397, 38.79335608240133]
            ]
           })
          {
            ost {
              id
              descrizione
              name
              type
            },
            totalCount
          }
        }
        `;
    const GET_LOCATIONS_NO_TYPE = `
        {
          queryOst(page: 0, fulltext: "`+filterState.getText()+`", locale: "it", count: 20, geoQuery: {
             type: "envelope",
            values: [
                 [9.073333740234377, 40.5621007],
                 [10.290397, 38.79335608240133]
            ]
           })
          {
            ost {
              id
              descrizione
              name
              type
            },
            totalCount
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
        body: JSON.stringify({query: filterState.getType() === 'all' ? GET_LOCATIONS_NO_TYPE : GET_LOCATIONS})
    })
        .then(r => r.json())
        .then(data => {return data});
};

export default Query;

