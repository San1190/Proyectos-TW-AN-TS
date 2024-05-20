import { Component, Output,EventEmitter} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavouriteEvent = new EventEmitter<string>();

  fav(gameName:string){
    this.addFavouriteEvent.emit(gameName);
  }

  games = [
    {
      id:1,
      name: 'Super Mario Bros',

    },
    {
      id:2,
      name: 'Zelda',
    },
    {
      id:3,
      name: 'Donkey Kong',
    },
    {
      id:4,
      name: ' Street Fighter',
    },
  ]

}
