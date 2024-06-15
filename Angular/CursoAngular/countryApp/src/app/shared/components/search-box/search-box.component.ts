import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

    //event emitter
  @Output() 
  public onValue = new EventEmitter<string>();
  

  emitValue(value: string):void {
    this.onValue.emit(value);
  }


}
