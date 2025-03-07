import https from 'node:https';

export class RestCountries {
  private baseURL: string = 'https://restcountries.com/v3.1';

  private async getParsedCountries(url: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          let data = '';

          console.log('URL:', url);

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            try {
              console.log('DATA RECEIVED:');
              console.log(data.substring(0, 100) + '...'); // Log the first 100 chars to see what's coming back

              // Check if the response is valid JSON
              const parsedData = JSON.parse(data);
              console.log('PARSED DATA:');
              console.log(parsedData.length);
              if (parsedData?.status === 404) {
                resolve([]);
              } else {
                resolve(parsedData || []);
              }
            } catch (error: any) {
              console.error(
                'Raw data causing parse error:',
                data.substring(0, 200),
              );
              reject([]);
            }
          });

          res.on('error', (err) => {
            console.error('HTTPS Response Error: ' + err.message);
            reject([]);
          });
        })
        .on('error', (err) => {
          console.error('HTTPS Connection Error: ' + err.message);
          reject([]);
        });
    });
  }

  public async getAll(): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/all`);
  }

  public async getByName(name: string): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/name/${name}`);
  }

  public async getByFullName(fullName: string): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/fullName/${fullName}`);
  }

  public async getByCode(code: string): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/alpha/${code}`);
  }

  public async getByCurrency(currency: string): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/currency/${currency}`);
  }

  public async getByRegion(region: string): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/region/${region}`);
  }

  public async getByCallingCode(callingCode: string): Promise<any[]> {
    return this.getParsedCountries(
      `${this.baseURL}/callingcode/${callingCode}`,
    );
  }

  public async getByCapital(capital: string): Promise<any[]> {
    return this.getParsedCountries(`${this.baseURL}/capital/${capital}`);
  }
}
