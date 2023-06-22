import data from '../data/data-cart.json';

export const fetchData = async () => {
    const response = await fetch('../data/data-cart.json');
    const product = await response.json();
    return product;
  };
  