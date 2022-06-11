const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (rate) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const films = theaterIXX.concat(theaterVGC);
  const result = countRate(rate, films)
  return result;
}
const countRate = (rate, films) => {
  const filterFilm = films.filter((film) => film.hasil === rate);
  return filterFilm.length;
}
module.exports = {
  promiseOutput,
};
