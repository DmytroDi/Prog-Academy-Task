const priceBtc = prompt('What is Bitcoin price today?');
const amountUsd = prompt('How much $ do you have?');
const sumBtc = amountUsd / priceBtc;
alert(`You can buy ${sumBtc} BTC`);