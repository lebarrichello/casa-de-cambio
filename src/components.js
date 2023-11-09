const coinsTitle = document.querySelector('.coins-title');
const coinsListElement = document.querySelector('.coins');


// funcao para criar cada elemento li
export function createCoinElement(name, value) {
    const coinEl = document.createElement('li');
    coinEl.innerHTML = `${name} <span>${value}</span>`;
    return coinEl;
}

// receber um array no formato [{name: "USD", value:4.10}]
export function renderCoins(coins, baseCoin) {
  coinsTitle.innerHTML = `Valores referentes a 1 ${baseCoin}`;
  coinsListElement.innerHTML = '';

coins.forEach((coin) => {
    const coinEL = createCoinElement(coin.name, coin.value);
    coinsListElement.appendChild(coinEL);
});

}