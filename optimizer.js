const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584',
  };

function optimizer(data) {
    const dataArr = Object.entries(data).map(([key, value]) => {
        return [key.toLowerCase(), Number(value).toFixed(2)];
    });
    return Object.fromEntries(dataArr);
  };

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData)