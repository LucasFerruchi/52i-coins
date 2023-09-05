const url = "https://api.coincap.io/v2/assets";

let limite = 10;

//  api.coincap.io/v2/assets?limit=10

//Funcion asincrona

export const getCoins = async () => {
  const coins = await fetch(url + "?limit=" + limite);
  //const coins = await fetch(`${url}?limit=${limite}`);

  const data = await coins.json();

  return data;
};
