import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root' // para que el servicio sea unico en toda la aplicacion y este disponible en cualquier componente
})
export class GifsService {
  public gfsList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private apiKey: string = 'fOcyuOuyRxSrg7hkTJX5siGpmwr7GQJj';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){

    tag = tag.toLocaleLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);

  }


  public searchTag(tag: string): void{
    if(tag.length === 0){return;}
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)



    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        this.gfsList = resp.data;

      });

    //this._tagsHistory.unshift(tag); // añade el tag al principio del array

    //https://api.giphy.com/v1/gifs/search?api_key=fOcyuOuyRxSrg7hkTJX5siGpmwr7GQJj&q=valorant&limit=10


  }
  
}
