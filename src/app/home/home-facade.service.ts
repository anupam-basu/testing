import { Injectable } from '@angular/core';
import { MockApiService, User } from '../../mock-api';
import { Observable } from 'rxjs';

@Injectable()
export class HomeFacade {
  customers$: Observable<User[]>;

  constructor(private mockApiService: MockApiService) {
    this.customers$ = this.mockApiService.getUsers();
  }
}
