import fetchRates from './api';
import { renderCoins } from './components';

const searchBtn = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');

function handleSearch(e) {
    e.preventDefault();
    console.log('Botão de pesquisa clicado!');
    const searchedCoin = coinInput.value;

    fetchRates(searchedCoin)
    .then((dados)=> {
        // transformar o objeto em array
        const {base, rates} = dados;

        const ratesArray = Object.entries(rates);

        // transformar o array em array de objetos [{name: '', value: ''}, {}]
        const ratesArrayObject = ratesArray.map((rate) => (
            {name: rate[0], value: rate[1]}
        ));
        

        // chama a funcao que cria a lista com as moedas
        renderCoins(ratesArrayObject, base);
    })
}

searchBtn.addEventListener('click', handleSearch);