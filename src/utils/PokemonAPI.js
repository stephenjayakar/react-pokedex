export const getPokemonImgURL = (id) => {
  let paddedID = String(id);
  while (paddedID.length < 3) {
    paddedID = '0' + paddedID;
  }
  const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + paddedID + ".png";
  return url;
}