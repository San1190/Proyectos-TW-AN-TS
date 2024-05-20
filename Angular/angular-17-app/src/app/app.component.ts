import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,CommentsComponent],
  templateUrl: './app.component.html',
  //template:`<h1>Hola mundo desde {{city.toUpperCase()}} {{ 1 + 1}}</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  city =  "Barcelona";
}
