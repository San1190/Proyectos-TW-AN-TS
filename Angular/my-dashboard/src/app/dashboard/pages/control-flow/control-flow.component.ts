import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  standalone: true,
  
})
export default class ControlFlowComponent{


  public showContent = signal(false);

  public toggleContent(){
    this.showContent.update(value =>  !value)
  }


}


