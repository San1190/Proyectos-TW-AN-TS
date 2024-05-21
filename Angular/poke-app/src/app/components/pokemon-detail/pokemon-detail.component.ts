import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvolutionChainComponent } from '../evolution-chain/evolution-chain.component';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, EvolutionChainComponent],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input() pokemon : any;
  evolutionChainId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemon(id).subscribe(data => {
        this.pokemon = data;
        this.pokemonService.getEvolutionChain(data.species.url).subscribe(chain => {
          this.evolutionChainId = chain.id;
        });
      });
    }
  }
}
