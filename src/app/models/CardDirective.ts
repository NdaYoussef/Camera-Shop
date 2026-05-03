import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[productCard]',
  standalone: true
})
export class ProductCardDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBaseStyles();
  }

  private setBaseStyles() {
    const s = this.el.nativeElement.style;
    s.borderRadius    = '12px';
    s.border          = '1px solid #e8e8e8';
    s.boxShadow       = '0 2px 12px rgba(0, 0, 0, 0.08)';
    s.transition      = 'box-shadow 0.25s ease, transform 0.25s ease';
    s.overflow        = 'hidden';
    s.backgroundColor = '#fff';
  }

  @HostListener('mouseenter') onHover() {
    const s = this.el.nativeElement.style;
    s.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.15)';
    s.transform = 'translateY(-4px)';
  }

  @HostListener('mouseleave') onLeave() {
    const s = this.el.nativeElement.style;
    s.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    s.transform = 'translateY(0)';
  }
}