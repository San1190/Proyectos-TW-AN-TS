import { Component, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' |'F';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  imports: [TitleComponent],
  standalone: true,
  
})
export default class ControlFlowComponent{


  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular','React','Vue', 'Svelte', 'Ember']);
  public frameworks2 = signal([]);
  public toggleContent(){
    this.showContent.update(value =>  !value)
  }


}


