import { Component, inject, signal } from '@angular/core';
import { BlogService } from './blog.service';
import { Button } from "primeng/button";
import { Card } from "primeng/card";
import { ProgressSpinner } from "primeng/progressspinner";
import { SharedModule } from "primeng/api";

@Component({
  selector: 'app-blog',
  imports: [Button, Card, ProgressSpinner, SharedModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  blogservice = inject(BlogService);
  publicaciones = signal<any[]>([]);
  cargando = signal<boolean>(true);

  constructor() {
    this.funListarPublicaciones();
  }
  funListarPublicaciones() {
    this.cargando.set(true);
    this.blogservice.funObtenerArticulos().subscribe({
      next: (data: any) => {
        this.publicaciones.set(data);
        this.cargando.set(false);
      },
      error: (err: any) => { console.log('Error al obtener publicaciones', err); }
    })
  }
}
