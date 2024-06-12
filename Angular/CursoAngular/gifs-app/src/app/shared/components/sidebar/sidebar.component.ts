import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //private

  

  constructor(private gifsService: GifsService) { }

  get tagsHistory(): string[]{
    return this.gifsService.tagsHistory;
  }
  //recoger el historial de busqueda de tags

  searchTag(tag:string){
    this.gifsService.searchTag(tag);
  }




}
