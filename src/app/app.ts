import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('app-angular-crud');
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Mi Blog',
        icon: 'pi pi-book',
        routerLink: '/'
      },
      {
        label: 'CRUD Productos',
        icon: 'pi pi-shopping-bag',
        routerLink: '/producto'
      }
    ];
  }
}
