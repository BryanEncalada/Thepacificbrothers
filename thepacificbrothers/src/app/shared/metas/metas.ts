import { AfterViewInit, Component } from '@angular/core';
declare const PureCounter: any;

@Component({
  selector: 'app-metas',
  imports: [],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof PureCounter !== 'undefined') {
      // Inicializa/rehidrata los contadores presentes en el DOM
      new PureCounter();
    }
  }
}
