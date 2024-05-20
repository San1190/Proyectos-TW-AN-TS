import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe]
})
export class PokemonSearchComponent {
  pokemon: any;
  pokemonName: string = '';
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe(data => {
      this.pokemonList = data.results;
      
    })
  }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe(data => {
        this.pokemon = data;
      }, error => {
        this.pokemon = null;
      });
    }
  }

  filterPokemonList() {
    this.filteredPokemonList = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().startsWith(this.pokemonName.toLowerCase())
    );
  }

  selectPokemon(name: string) {
    this.pokemonName = name;
    this.filteredPokemonList = [];
    this.searchPokemon();
  }
}
