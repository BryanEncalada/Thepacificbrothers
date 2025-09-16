import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videobanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videobanner.html',
  styleUrl: './videobanner.css',
})
export class Videobanner implements AfterViewInit, OnDestroy {
  @Input() mp4Src = 'assets/video/hero.mp4';
  @Input() webmSrc = 'assets/video/hero.webm';
  /** Imagen de respaldo para el poster */
  @Input() poster = 'assets/imgs/hero/poster.webp';
  /** Alto del banner (ej. '80vh', '100dvh') */
  @Input() height = '90vh';
  /** Texto principal */
  @Input() title = 'The Pacific Brother';
  /** Subtítulo opcional */
  @Input() subtitle = 'Creatividad & Tecnología del Pacífico';

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  private mediaQuery: MediaQueryList | undefined;

  ngAfterViewInit() {
    // Respeta “reducir movimiento”: pausa y muestra poster
    this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyMotionPref = () => {
      const vid = this.bgVideo?.nativeElement;
      if (!vid) return;
      if (this.mediaQuery?.matches) {
        vid.pause();
        vid.removeAttribute('autoplay');
      } else {
        // Intenta reproducir en silencio (requerido por la mayoría de navegadores)
        vid.muted = true;
        vid.play().catch(() => {
          /* silencioso */
        });
      }
    };
    applyMotionPref();
    this.mediaQuery?.addEventListener?.('change', applyMotionPref);
  }

  ngOnDestroy() {
    this.mediaQuery?.removeEventListener?.('change', () => {});
  }
}
