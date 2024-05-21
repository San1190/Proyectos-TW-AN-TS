import { Routes } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: PokemonSearchComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  // Add additional routes here as needed
  
];
