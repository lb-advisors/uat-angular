import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  private loginApiUrl = 'https://uat-pffc.onrender.com/api/public/auth/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = null;
    const { username, password } = this.loginForm.value;

    // Directly send the plaintext password for login
    this.http.post<{ token: string }>(this.loginApiUrl, { username, password }).subscribe({
      next: (loginResponse) => {
        // Save the token to both sessionStorage and localStorage via AuthService
        this.authService.saveToken(loginResponse.token);
        console.log('Login successful, token saved:', loginResponse.token); // Debug: Log token

        // Navigate to the products page
        this.router.navigate(['/products']);
      },
      error: (loginError) => {
        // Handle login error
        this.loading = false;
        this.errorMessage = 'Login failed. Please check your username and password.';
        console.error('Login error:', loginError);
      }
    });
  }
}
