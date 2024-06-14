import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',

})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;
  


  constructor() { }

  ngOnInit(): void {
    if(!this.url) throw new Error('Url not implemented.');
  }

  onLoad(){
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
