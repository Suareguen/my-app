import api from "./apiService";
export const getPokemons = async () => {
  try {
    const { data } = await api.get("/pokemon/?limit=151");
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const getPokemonsById = async (name) => {
  try {
    const { data } = await api.get(`/pokemon/${name}/?limit=150`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
