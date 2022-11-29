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
    console.log(data[0]);
  });
});

//////////////////////////////////////////

function renderCountries(data) {
  if (data.length === 1) {
    const markInfo = infoCountries(data);
    refs.info.innerHTML = markInfo;
  } else {
    const markList = listCountries(data);
    refs.list.innerHTML = markList;
  }
}

function infoCountries(data) {
  let markup = data
    .map(
      ({ name, capital, population, flags, languages }) =>
        ` <img src="${flags.png}" alt="country-flag" />
    <h1>${name}</h1>
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${Object.values(languages)}</p>
  `
    )
    .join('');
}

function listCountries(data) {
  let markup = data
    .map(
      ({ name, flags }) =>
        ` <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name}</p>
  </li>
  <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name}</p>
  </li>
  <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name}</p>
  </li>
  <li>
    <img src="${flags.png}" alt="country-flag" />
    <p>${name}</p>
  </li>
  `
    )
    .join('');
}

renderCountries(data);

fetchCountries(name);