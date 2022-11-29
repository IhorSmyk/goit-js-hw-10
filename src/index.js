import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input'),
};

refs.input.addEventListener('input', e => {
  e.preventDefault();
  const findCountry = e.target.value;
  fetchCountries(findCountry).then((data) => {
    console.log(data[0]);
  });
});

