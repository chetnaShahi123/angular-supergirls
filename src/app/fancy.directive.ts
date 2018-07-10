import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFancy]'
})
export class FancyDirective implements OnInit{

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.elem.nativeElement.style.color = '#ff000f';
  }

}
