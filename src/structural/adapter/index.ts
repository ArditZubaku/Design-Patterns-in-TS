import { Continent } from './countries-repository';
import { RestCountries } from './rest-countries';
import { RestCountriesAdapter } from './rest-countries.adapter';

// const countriesRepository = new CountriesRepository();
const countriesRepository = new RestCountriesAdapter(new RestCountries());

countriesRepository.allByCurrency('Euro').then((euroCountries) => {
  console.log('Euro countries', euroCountries);
});

countriesRepository
  .allByContinent(Continent.NorthAmerica)
  .then((northAmericaCountries) => {
    console.log(
      `Number of North America countries stored: ${northAmericaCountries.length}`,
    );
  });

// const restCountries = new RestCountries();

// restCountries
//   // .getByRegion(Continent.NorthAmerica)
//   .getByRegion('Americas')
//   .then((northAmericaCountries) => {
//     console.log(
//       `Number of North America countries fetched: ${northAmericaCountries.length}`,
//     );
//   });
