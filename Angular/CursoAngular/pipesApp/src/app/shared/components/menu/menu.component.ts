import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Products', icon: 'pi pi-fw pi-shopping-cart'},
      {label: 'Orders', icon: 'pi pi-fw pi-shopping-cart'}]

  }

}
