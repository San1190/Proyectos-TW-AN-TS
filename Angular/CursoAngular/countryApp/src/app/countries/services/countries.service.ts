import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    constructor(private http: HttpClient) { }

    private apiUrl: string = 'https://restcountries.com/v3.1'

    private getCountriesRequest(url: string):Observable<Country[]>{
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([])),
        //delay(800)
      );


    }





    searchCountryByAlphaCode(code: string): Observable<Country | null> {
      return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
          map(countries => countries.length > 0 ? countries[0] : null),
          catchError(error => of(null)),
        );
    }





    searchCapital(term: string): Observable<Country[]>{

      const url = `${this.apiUrl}/capital/${term}`
      return this.getCountriesRequest(url)

    }

    //pais https://restcountries.com/v3.1/name/{name}

    searchCountry(term: string): Observable<Country[]>{

      const url = `${this.apiUrl}/capital/${term}`
      return this.getCountriesRequest(url)
    }


    //region https://restcountries.com/v3.1/region/{region}

    searchRegion(region: string): Observable<Country[]>{
      const url = `${this.apiUrl}/capital/${region}`
      return this.getCountriesRequest(url)

    }

}
