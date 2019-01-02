import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open')
  private open = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('document:click', ['$event.target']) toggleDropdown(target) {
    if (this.elementRef.nativeElement.contains(target)) {
      if (this.open) {
        this. open = false;
      } else {
        this.open = true;
      }
      // this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.open = false;
      // this.renderer.removeChild(this.elementRef.nativeElement, 'open');
    }
  }


}
