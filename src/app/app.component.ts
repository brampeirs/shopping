import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public featureSelected = 'recipes';
  onFeatureSelected(feature: string) {
    this.featureSelected = feature;
  }
}
