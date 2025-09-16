import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
declare const PureCounter: any;

export interface KPIItem {
  value: number;
  label: string;
  icon: string; // clase de Bootstrap Icons, p.e. "bi-emoji-smile"
  suffix?: string; // "+", "k+", etc
}

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas implements AfterViewInit {
  @Input() items: KPIItem[] = [
    { value: 126, label: 'Empresas Aliadas', icon: 'bi-people' }, // grupo / alianzas
    { value: 535, label: 'Puntos de Venta', icon: 'bi-shop' }, // tiendas / retail
    { value: 896, label: 'Productos en Catálogo', icon: 'bi-box-seam' }, // caja / producto
    { value: 777, label: 'Mercados', icon: 'bi-globe2' }, // alcance global
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards = (this.el.nativeElement as HTMLElement).querySelectorAll(
      '.kpi-card[data-target]'
    ) as NodeListOf<HTMLElement>;

    const io = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e: IntersectionObserverEntry) => {
          if (!e.isIntersecting) return;

          const card = e.target as HTMLElement;
          const target = Number(card.dataset['target'] || '0');
          const suffix = card.dataset['suffix'] || '';
          const valueEl = card.querySelector('.kpi-value') as HTMLElement;

          this.animate(valueEl, target, suffix);
          io.unobserve(card);
        });
      },
      { threshold: 0.35 }
    );

    cards.forEach((c) => io.observe(c));
  }

  /** Contador suave sin librerías */
  private animate(el: HTMLElement, target: number, suffix: string = ''): void {
    const start = performance.now();
    const dur = 1000; // ms
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
