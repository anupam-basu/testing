import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  // Mock credentials
  private readonly MOCK_USERNAME = 'sales';
  private readonly MOCK_PASSWORD = 'demo123';

  constructor(private router: Router) {}

  onSubmit() {
    // Basic validation - you can enhance this
    if (
      this.username === this.MOCK_USERNAME &&
      this.password === this.MOCK_PASSWORD
    ) {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    }
  }
}
