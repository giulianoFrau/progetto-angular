import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() coloreHilight = '';

  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.coloreHilight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('transparent');
  }
  cambiaColore(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
