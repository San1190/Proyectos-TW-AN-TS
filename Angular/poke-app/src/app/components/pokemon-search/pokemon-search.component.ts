import { EvolutionChainComponent } from './../evolution-chain/evolution-chain.component';
import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonMovesComponent } from '../pokemon-moves/pokemon-moves.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe,PokemonMovesComponent,EvolutionChainComponent, PokemonDetailComponent]
})
export class PokemonSearchComponent {
  pokemon: any;
  pokemonName: string = ' ';
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  evolutionChainId: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(data => {
      this.pokemonList = data.results;
    });
  }

  searchPokemon() {
    this.pokemonService.getPokemon(this.pokemonName).subscribe(data => {
      this.pokemon = data;
      this.evolutionChainId = this.pokemon.species.url.split('/')[6];
    });
  }

  filterPokemonList() {
    this.filteredPokemonList = this.pokemonList.filter(pokemon => {
      return pokemon.name.includes(this.pokemonName);
    });
  }

  selectPokemon(name: string) {
    this.pokemonName = name;
    this.filteredPokemonList = [];
    this.searchPokemon();
  }
}
