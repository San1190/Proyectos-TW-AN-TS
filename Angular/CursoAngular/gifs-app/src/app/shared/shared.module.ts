import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyimageComponent } from './components/lazyimage/lazyimage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyimageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
