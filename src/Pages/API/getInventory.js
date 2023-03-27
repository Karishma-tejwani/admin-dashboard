const getInventory = async () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export default getInventory;
