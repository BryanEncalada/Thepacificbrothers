import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Banner } from './shared/banner/banner';
import { Nosotros } from './shared/nosotros/nosotros';
import { Caractericas } from './shared/caractericas/caractericas';
import { Metas } from './shared/metas/metas';
import { Marcas } from './shared/marcas/marcas';
import { Footer } from './shared/footer/footer';
import { Contacto } from './shared/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [Navbar, Banner, Nosotros, Caractericas, Metas, Marcas, Footer, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('thepacificbrothers');
}
