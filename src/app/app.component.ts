import { Component } from '@angular/core';
import { HomeModule } from './home/home.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  standalone: true,
  imports: [HomeModule, RouterOutlet],
})
export class AppComponent {}
