import countryList from './countryList';
import debounce from 'lodash.debounce';
import { getRefs } from './countryRefs';
import { createCountryList } from '../templates/createCountryList';
import { createCountryCard } from '../templates/createCountryCard';
const refs = getRefs();

const handleInput = event => {
  let { value } = event.target;

  value = value.trim().toLowerCase();

  if (value === '') {
    refs.errorText.textContent = '';
    refs.gallery.innerHTML = '';
    return;
  }

  const countryInfo = countryList.filter(({ name }) =>
    name.toLowerCase().includes(value)
  );

  if (countryInfo.length > 1) {
    const listMarkup = createCountryList(countryInfo).join('');
    refs.gallery.innerHTML = listMarkup;
    refs.errorText.textContent = '';
  }

  if (countryInfo.length === 1) {
    const listMarkup = createCountryCard(countryInfo[0]);
    refs.gallery.innerHTML = listMarkup;
    refs.errorText.textContent = '';
  }

  if (countryInfo.length === 0) {
    refs.gallery.innerHTML = '';
    refs.errorText.textContent = `Countri ${value} not found!`;
  }
};

const debouncedHandleInput = debounce(handleInput, 300);
refs.input.addEventListener('input', debouncedHandleInput);
