import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${name}`);


  }

  getPokemonList(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=1000`);
  }
}
