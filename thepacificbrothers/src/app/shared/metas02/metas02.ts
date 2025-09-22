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
    { icon: 'bi-people', label: 'Happy Clients', value: 1234 },
    { icon: 'bi-check2-circle', label: 'Projects Completed', value: 1234 },
    { icon: 'bi-people-fill', label: 'Dedicated Staff', value: 1234 },
    { icon: 'bi-award', label: 'Awards Achieved', value: 1234 },
  ];
}
