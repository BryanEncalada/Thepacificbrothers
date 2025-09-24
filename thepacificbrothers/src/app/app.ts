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
import { Videobanner } from './shared/videobanner/videobanner';
import { Metas02 } from './shared/metas02/metas02';
import { Banner02 } from './shared/banner02/banner02';
import { Marca02 } from './shared/marca02/marca02';
import { MarcaIzquierda } from './shared/marca-izquierda/marca-izquierda';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Nosotros,
    Caractericas,
    Footer,
    Contacto,
    Metas02,
    Banner02,
    Marca02,
    MarcaIzquierda,
    Videobanner,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('thepacificbrothers');
}
