export function fetchCountries(name) {
    return fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    )
      .then(response => {
        // if (!response.ok) {
        //     throw new Error("not found");
        // }
        return response.json();
      })
      .catch(() => {
        console.log('not found!');
      });
}


//https://restcountries.com/v2/{service}?fields={field},{field},{field}


/*    name.official - повна назва країни
    capital - столиця
    population - населення
    flags.svg - посилання на зображення прапора
    languages - масив мов
    */