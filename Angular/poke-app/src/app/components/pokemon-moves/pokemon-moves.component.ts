import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-moves.component.html',
  styleUrl: './pokemon-moves.component.css'
})
export class PokemonMovesComponent {
  @Input() moves: any;

}
