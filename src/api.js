const BASE_URL = 'https://api.exchangerate.host/latest?base=';


export default function fetchRates(searchedcoin) {
    return fetch(`${BASE_URL}${searchedcoin}`)
    .then((request) => request.json())
    .then((dados) => {
        console.log('Dados recebidos:', dados);
        if(dados.base !== searchedcoin){
            console.error('Moeda pesquisada:', searchedcoin);
                console.error('Moeda na resposta:', dados.base);
            throw new Error ('Moeda nao existe');
        }
        return dados;
    })
    .catch((error) => {
        console.error('Erro na requisição:', error);
        throw error; 
    });
}