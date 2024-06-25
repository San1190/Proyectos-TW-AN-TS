import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

    constructor(private http: HttpClient) { }


    private apiUrl: string = 'https://restcountries.com/v3.1'

    public cacheStore: CacheStore = {
      byCapital: {term: '', countries: []},
      byCountries: {term: '', countries: []},
      byRegion: {region: '', countries: []}

    }

    private saveToLocalStorage(){
      localStorage.setItem('cache', JSON.stringify(this.cacheStore));

    }

    private loadFromLocalStorage(){

      if(!localStorage.getItem('cacheStore')) return;

      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);

    }


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
        .pipe(
          tap(countries => this.cacheStore.byCapital = {term, countries}),
          tap(() => this.saveToLocalStorage())
        );

    }

    //pais https://restcountries.com/v3.1/name/{name}

    searchCountry(term: string): Observable<Country[]>{

      const url = `${this.apiUrl}/name/${term}`
      return this.getCountriesRequest(url)
        .pipe(
          tap(countries => this.cacheStore.byCountries = {term, countries}),
          tap(() => this.saveToLocalStorage())
        );
    }


    //region https://restcountries.com/v3.1/region/{region}

    searchRegion(region: Region): Observable<Country[]>{
      const url = `${this.apiUrl}/region/${region}`
      return this.getCountriesRequest(url)
        .pipe(
          tap(countries => this.cacheStore.byRegion = {region, countries}),
          tap(() => this.saveToLocalStorage())
        );

    }

}
