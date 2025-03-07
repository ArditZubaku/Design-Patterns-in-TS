import fs from 'node:fs';
import { ICountry } from './interfaces/country';
import { ICountriesRepository } from './interfaces/contries-repository';

export const Continent = {
  Africa: 'Africa',
  Asia: 'Asia',
  Europe: 'Europe',
  NorthAmerica: 'NorthAmerica',
  SouthAmerica: 'SouthAmerica',
  Oceania: 'Oceania',
} as const;

export class CountriesRepository implements ICountriesRepository {
  public async all(): Promise<ICountry[]> {
    return Promise.all(
      Object.values(Continent).map((continent) =>
        this.allByContinent(continent),
      ),
    ).then((res) => res.flat());
  }

  public async allByContinent(
    continent: keyof typeof Continent,
  ): Promise<ICountry[]> {
    return new Promise<ICountry[]>((resolve, reject) => {
      fs.readFile(this.continentToFileName(continent), 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const countries: ICountry[] = JSON.parse(data);
          resolve(countries);
        }
      });
    });
  }

  public async allByCurrency(currency: string): Promise<ICountry[]> {
    return (await this.all()).filter(
      (country) => country.currency === currency,
    );
  }

  private continentToFileName(continent: keyof typeof Continent) {
    const prefix: string = __dirname + '/../../../data/';
    const [firstLetter, ...restOfTheWord] = Continent[continent];
    return (
      prefix +
      firstLetter
        .at(0)
        ?.toLowerCase()
        .concat(...restOfTheWord)
        .concat('.json')
    );
  }
}
