import { Component } from '@angular/core';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  template: `
    <app-home></app-home>
  `,
  standalone: true,
  imports: [HomeModule],
})
export class AppComponent {}
