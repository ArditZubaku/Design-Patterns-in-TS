import { ICountriesRepository } from './interfaces/contries-repository';
import { RestCountries } from './rest-countries';
import { ICountry } from './interfaces/country';
import { Continent } from './countries-repository';
export class RestCountriesAdapter implements ICountriesRepository {
  constructor(private restCountriesAPI: RestCountries) {}

  private restCountryToCountry(restCountry: any): ICountry {
    return {
      name: restCountry.name.common,
      capital: restCountry.capital.at(0),
      currency: Object.keys(restCountry.currencies)[0],
    };
  }

  private restCountriesToCountries(restCountries: any[]): ICountry[] {
    return restCountries.map(this.restCountryToCountry);
  }

  async all(): Promise<ICountry[]> {
    const restCountries = await this.restCountriesAPI.getAll();
    return this.restCountriesToCountries(restCountries);
  }

  async allByContinent(continent: string): Promise<ICountry[]> {
    const region =
      continent === Continent.NorthAmerica ||
      continent === Continent.SouthAmerica
        ? 'Americas'
        : continent;

    const restCountries = await this.restCountriesAPI.getByRegion(region);
    let result: ICountry[] = [];
    if (continent === Continent.NorthAmerica) {
      result = restCountries.filter(
        (country) => country.subregion === 'Northern America',
      );
    } else if (continent === Continent.SouthAmerica) {
      result = restCountries.filter(
        (country) => country.subregion === 'South America',
      );
    } else {
      result = restCountries;
    }

    return this.restCountriesToCountries(result);
  }

  async allByCurrency(currency: string): Promise<ICountry[]> {
    const restCountries = await this.restCountriesAPI.getByCurrency(currency);
    console.log('restCountries', restCountries);

    return this.restCountriesToCountries(restCountries);
  }
}
