import { ICountry } from './country';

export interface ICountriesRepository {
  all(): Promise<ICountry[]>;
  allByContinent(continent: string): Promise<ICountry[]>;
  allByCurrency(currency: string): Promise<ICountry[]>;
}
