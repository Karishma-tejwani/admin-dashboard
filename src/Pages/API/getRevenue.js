const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export default getRevenue;
