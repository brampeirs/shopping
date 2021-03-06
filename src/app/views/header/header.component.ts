import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectFeature(feature: string) {
    this.featureSelected.emit(feature);
  }
}
