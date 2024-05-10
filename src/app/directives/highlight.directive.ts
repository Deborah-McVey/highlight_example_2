import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {

  @Input({required: true})
  appHighlight!: string;

  constructor(private elementRef: ElementRef) {

  }

  ngOnChanges(): void {
    this.elementRef.nativeElement.style.color = this.appHighlight;
  }

}
