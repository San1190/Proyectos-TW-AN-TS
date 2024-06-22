import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public isLoading: boolean = false;
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }







  searchByCapital(term:string){
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe(c => {
      this.countries = c;
      this.isLoading = false;

    })

  }


}
