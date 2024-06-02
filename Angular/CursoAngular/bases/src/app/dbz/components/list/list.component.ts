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
  public onDelete: EventEmitter<number> = new EventEmitter();

  //TODO crear un evento para emitir el id del personaje a eliminar


  onDeleteCharacter(index: number): void {
    //TODO emitir el id del personaje a eliminar
    this.onDelete.emit(index);

  }

}
