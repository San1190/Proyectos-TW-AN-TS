import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //TODO crear un evento para emitir el id del personaje a eliminar


  onDeleteCharacter(id?: string): void {
    //TODO emitir el id del personaje a eliminar
    if(!id) return;
    
    this.onDelete.emit(id);

  }

}
