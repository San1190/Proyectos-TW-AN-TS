import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonMovesComponent } from './components/pokemon-moves/pokemon-moves.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, PokemonSearchComponent, CommonModule,]
})
export class AppComponent { }
