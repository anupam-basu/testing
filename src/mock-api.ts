import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Address {
  city: string;
  country: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
}

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: { city: 'New York', country: 'USA' },
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      address: { city: 'London', country: 'UK' },
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      address: { city: 'Sydney', country: 'Australia' },
    },
    {
      id: 4,
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bob.brown@example.com',
      address: { city: 'Toronto', country: 'Canada' },
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(1000));
  }
}
