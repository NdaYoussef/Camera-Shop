import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[productCard]',
  standalone: true
})
export class ProductCardDirective {

  constructor(private el: ElementRef) {
    this.setBaseStyles();
  }

  private setBaseStyles() {
    const s = this.el.nativeElement.style;
  }
@Input() hoverScale: number = 2;       // default scale
@Input() hoverShadow: string = '0 16px 40px rgba(124, 83, 87, 0.25)';  // default shadow
  @HostListener('mouseenter') onHover() {
    this.el.nativeElement.style.transform  = `scale(${this.hoverScale})`;
    this.el.nativeElement.style.boxShadow  = this.hoverShadow;
  }

  @HostListener('mouseleave') onLeave() {
   this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = 'none';
  }
  
}