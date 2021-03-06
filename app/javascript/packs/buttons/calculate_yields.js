window.onload = function() {
    const buttonCalculateBTCYields = document.getElementById("calculate-btc-yields");
    const buttonCalculateETHYields = document.getElementById("calculate-eth-yields");
    const buttonCalculateADAYields = document.getElementById("calculate-ada-yields");

    const inputBitcoinAmount = document.getElementById("bitcoin-amount");
    const inputEthereumAmount = document.getElementById("ethereum-amount");
    const inputCardanoAmount = document.getElementById("cardano-amount");

    const outputBitcoinYield = document.getElementById("bitcoin-yield");
    const outputEthereumYield = document.getElementById("ethereum-yield");
    const outputCardanoYield = document.getElementById("cardano-yield");

    const outputTotalBTCYieldUSD = document.getElementById("btc-total-yield");
    const outputTotalETHYieldUSD = document.getElementById("eth-total-yield");
    const outputTotalADAYieldUSD = document.getElementById("ada-total-yield");

    const outputTotalBTCYield = document.getElementById("btc-total");
    const outputTotalETHYield = document.getElementById("eth-total");
    const outputTotalADAYield = document.getElementById("ada-total");

    let bitcoinYield = 0;
    let ethereumYield = 0;
    let cardanoYield = 0;
    
    buttonCalculateBTCYields.addEventListener('click', () => {
        let moneyinvert = parseFloat(inputBitcoinAmount.value, 10);
        let bitcoinCurrentPrice = parseFloat(document.getElementById("bitcoin-price").textContent, 10);
        bitcoinYield = moneyinvert * (1 + 0.05) ** 12 - moneyinvert;
        const totalYield = moneyinvert + bitcoinYield

        outputBitcoinYield.value = bitcoinYield.toFixed(2);
        outputTotalBTCYieldUSD.value = totalYield.toFixed(2)
        outputTotalBTCYield.value = (totalYield / bitcoinCurrentPrice).toFixed(7);
    });

    //export const calculateETHYields = 
    buttonCalculateETHYields.addEventListener('click', () => {
        let moneyinvert = parseFloat(inputEthereumAmount.value, 10);
        let ethereumCurrentPrice = parseFloat(document.getElementById("ethereum-price").textContent, 10);
        ethereumYield = moneyinvert * (1 + 0.042) ** 12 - moneyinvert;
        const totalYield = moneyinvert + ethereumYield;

        outputEthereumYield.value = ethereumYield.toFixed(2);
        outputTotalETHYieldUSD.value = totalYield.toFixed(2);
        outputTotalETHYield.value = (totalYield / ethereumCurrentPrice).toFixed(5);
    });

    //export const calculateADAYields = 
    buttonCalculateADAYields.addEventListener('click', () => {
        let moneyinvert = parseFloat(inputCardanoAmount.value, 10);
        let cardanoCurrentPrice = parseFloat(document.getElementById("cardano-price").textContent, 10);
        console.log(cardanoCurrentPrice);
        cardanoYield = moneyinvert * (1 + 0.01) ** 12 - moneyinvert;
        const totalYield = moneyinvert + cardanoYield;

        outputCardanoYield.value = cardanoYield.toFixed(2);
        outputTotalADAYieldUSD.value = totalYield.toFixed(2);
        outputTotalADAYield.value = (totalYield / cardanoCurrentPrice).toFixed(2);
    });
};
