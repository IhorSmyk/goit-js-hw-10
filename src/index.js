import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};


refs.input.addEventListener('input', e => {
  e.preventDefault();
  const findCountry = e.target.value;
  fetchCountries(findCountry).then((data) => {
   renderCountries(data);
  });
});

//////////////////////////////////////////

function renderCountries(data) {
  if (data.length === 1)    {
    refs.info.innerHTML = infoCountries(data);
  } else if (data.length > 1 && data.length <= 10) {
    refs.list.innerHTML = listCountries(data);
  } else {
    //////////////  to do
  }
}

function infoCountries(data) {
  return data
    .map(
      ({ name, capital, population, flags, languages }) =>
        ` <img src="${flags.png}" alt="country-flag" width="40px"/>
    <h1 style="display: inline;">${name.official}</h1>
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Population:</strong> ${population}</p>
    <p><strong>Languages:</strong> ${Object.values(languages)}</p>
  `
    )
    .join('');
}

function listCountries(data) {
  return data
    .map(
      ({ name, flags }) =>
        ` <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name.official}</p>
  </li>
  <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name.official}</p>
  </li>
  <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name.official}</p>
  </li>
  <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name.official}</p>
  </li>
  `
    )
    .join('');
}
