export const getPokemonImgURL = (id) => {
  let paddedID = padID(id);
  const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + paddedID + ".png";
  return url;
}

const padID = (id) => {
  let paddedID = String(id)
  while (paddedID.length < 3) { 
    paddedID = '0' + paddedID;
  }
  return paddedID;
}