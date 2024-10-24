import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../mock-api';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css',
})
export class CustomerTableComponent {
  @Input() customers?: User[] | null;
  @Output() search = new EventEmitter();
}
