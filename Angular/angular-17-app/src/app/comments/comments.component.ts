import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de los que sea</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg" alt="imagen">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id asperiores voluptatibus, ea illo vel neque incidunt magnam accusantium quaerat minus cum vero. Exercitationem eum aliquid illo nisi maxime necessitatibus!
    </p>

  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
