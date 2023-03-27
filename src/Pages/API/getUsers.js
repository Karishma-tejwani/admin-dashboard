const getUsers = async () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

export default getUsers;
