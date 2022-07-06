export const createCountryList = counrtiesList => {
  return counrtiesList.map(({ name, capital }) => {
    return `<li>
  <h5> Country name: ${name}</h5>
  <p>Country capital: ${capital}</p>
  </li>`;
  });
};
