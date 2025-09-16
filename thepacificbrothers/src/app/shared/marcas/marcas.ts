import { AfterViewInit, Component } from '@angular/core';
declare const Swiper: any;
@Component({
  selector: 'app-marcas',
  imports: [],
  templateUrl: './marcas.html',
  styleUrl: './marcas.css',
})
export class Marcas implements AfterViewInit {
  ngAfterViewInit(): void {
    // Busca todos los .init-swiper y los inicia leyendo la config JSON embebida
    document.querySelectorAll('.init-swiper').forEach((el) => {
      const cfgEl = el.querySelector('.swiper-config') as HTMLScriptElement | null;
      let options: any = {};
      if (cfgEl?.textContent) {
        try {
          options = JSON.parse(cfgEl.textContent);
        } catch {}
      }
      // Fallbacks útiles
      options = {
        loop: true,
        speed: 600,
        autoplay: { delay: 5000 },
        slidesPerView: 'auto',
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
        ...options,
      };
      new Swiper(el, options);
    });
  }
}
