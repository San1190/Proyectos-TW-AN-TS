import { Component, Input, OnChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class EvolutionChainComponent implements OnChanges {
  @Input() chainId!: number;
  evolutionChain: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges() {
    if (this.chainId) {
      this.pokemonService.getEvolutionChain(this.chainId).subscribe(
        data => {
          this.evolutionChain = data;
        },
        error => {
          console.error('Error fetching evolution chain', error);
        }
      );
    }
  }
}
