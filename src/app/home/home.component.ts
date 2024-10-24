import { Component } from '@angular/core';
import { HomeFacade } from './home-facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  customers$ = this.homeFacade.customers$;

  constructor(private homeFacade: HomeFacade) {}
}
