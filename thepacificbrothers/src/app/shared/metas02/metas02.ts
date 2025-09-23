import { Component, Input } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

export interface StatItem {
  icon: string; // ej: 'bi-people'
  label: string; // ej: 'Happy Clients'
  value: number; // número final
  prefix?: string;
  suffix?: string;
}

@Component({
  selector: 'app-metas02',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './metas02.html',
  styleUrls: ['./metas02.css'],
})
export class Metas02 {
  @Input() items: StatItem[] = [
    { icon: 'bi-people', label: 'Empresas Aliadas', value: 20 },
    { icon: 'bi-shop', label: 'Puntos de Venta', value: 65 },
    { icon: 'bi-box-seam', label: 'Productos en Catálogo', value: 85 },
    { icon: 'bi-globe-americas', label: 'Mercados', value: 2 },
  ];
}
