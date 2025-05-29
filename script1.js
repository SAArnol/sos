// Currency codes to loop through
const currencies = ['usd', 'gbp', 'eur', 'kes', 'tzs', 'zar', 'cny', 'rwf'];

// Load saved rates on page load
window.onload = () => {
  currencies.forEach(currency => {
    const buy = localStorage.getItem(`${currency}Buy`);
    const sell = localStorage.getItem(`${currency}Sell`);

    if (buy) document.getElementById(`${currency}Buy`).textContent = buy;
    if (sell) document.getElementById(`${currency}Sell`).textContent = sell;
  });
};

// Update rates and store them
function updateRates() {
  currencies.forEach(currency => {
    const buyInput = document.getElementById(`${currency}BuyInput`);
    const sellInput = document.getElementById(`${currency}SellInput`);

    const buyValue = buyInput.value;
    const sellValue = sellInput.value;

    if (buyValue !== '') {
      document.getElementById(`${currency}Buy`).textContent = buyValue;
      localStorage.setItem(`${currency}Buy`, buyValue);
    }

    if (sellValue !== '') {
      document.getElementById(`${currency}Sell`).textContent = sellValue;
      localStorage.setItem(`${currency}Sell`, sellValue);
    }

    // Clear input fields after update
    buyInput.value = '';
    sellInput.value = '';
  });

  alert("Rates updated successfully!");
}
