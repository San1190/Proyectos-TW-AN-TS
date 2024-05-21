import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonMovesComponent } from "../pokemon-moves/pokemon-moves.component";

@Component({
    selector: 'app-pokemon-detail',
    standalone: true,
    templateUrl: './pokemon-detail.component.html',
    styleUrl: './pokemon-detail.component.css',
    imports: [CommonModule, UpperCasePipe, PokemonMovesComponent]
})
export class PokemonDetailComponent {
  @Input() pokemon: any;

}
