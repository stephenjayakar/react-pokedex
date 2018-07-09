export const fetchPokemon = () => ({
  type: "FETCH_REQUESTED"
});

export const changePokemon = (name) => ({
  type: "CHANGE_POKEMON",
  name,
});