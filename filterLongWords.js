/**
 * Queremos filtrar el siguiente texto, y quedarnos solo con las palabras que son más largas de 'n' carácteres
 *
 * @param {string} sentence Un texto cualquiera
 * @param {number} n El tamaño mínimo de la palabra a filtrar
 */

function filterLongWords(sentence, n) {
  //Solution here

  //1. iNVESTIGA COMO usar el método split.
  const array = sentence.split(" ");
  const arrayFilter = array.filter((word) => word.length > n);
  return arrayFilter;

  console.log(array);

  // 2. Usa adecuadamente el filter para filtrar el array que devuelve el split
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4), [
  "quick",
  "brown",
  "jumps",
]);
