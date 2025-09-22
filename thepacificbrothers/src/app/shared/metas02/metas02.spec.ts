import { Component, Input, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';

export interface StatItem {
  icon: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

@Component({
  selector: 'app-metas02',
  standalone: true,
  imports: [NgFor],
  templateUrl: './metas02.html',
  styleUrls: ['./metas02.css'],
})
export class Metas02Component {
  @Input() items: StatItem[] = [
    { icon: 'bi-people', label: 'Happy Clients', value: 1234 },
    { icon: 'bi-check2-circle', label: 'Projects Completed', value: 1234 },
    { icon: 'bi-people-fill', label: 'Dedicated Staff', value: 1234 },
    { icon: 'bi-award', label: 'Awards Achieved', value: 1234 },
  ];

  displayValues: number[] = [];
  private animated = false;
  private io?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.displayValues = this.items.map(() => 0);
  }

  ngAfterViewInit() {
    this.io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !this.animated) {
          this.animated = true;
          this.startCount();
          this.io?.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    this.io.observe(this.host.nativeElement);
  }

  private startCount(duration = 1500) {
    const start = performance.now();
    const from = this.items.map(() => 0);
    const to = this.items.map((i) => i.value);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);

      this.displayValues = this.displayValues.map((_, i) =>
        Math.round(from[i] + (to[i] - from[i]) * eased)
      );

      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
