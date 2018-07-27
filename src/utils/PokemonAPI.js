export const getPokemonImgURL = (id) => {
  const baseURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  let paddedID = padID(id);
  const url = baseURL + paddedID + ".png";
  return url;
}

export const getPokemonIconImgURL = (name) => {
  const baseURL = 'https://raw.githubusercontent.com/msikma/pokesprite/master/icons/pokemon/regular/';
  const url = baseURL + name + '.png';
  return url;
}

const padID = (id) => {
  let paddedID = String(id)
  while (paddedID.length < 3) { 
    paddedID = '0' + paddedID;
  }
  return paddedID;
}