import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

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
    RouterModule, // Added RouterModule here
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  private loginApiUrl = `${environment.apiUrl}/public/auth/login`;

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

    this.http.post<{ token: string }>(this.loginApiUrl, { username, password }).subscribe({
      next: (loginResponse) => {
        this.authService.saveToken(loginResponse.token);
        console.log('Login successful, token saved:', loginResponse.token);
        this.router.navigate(['/products']); // Navigate to /products on success
      },
      error: (loginError) => {
        this.loading = false;
        this.errorMessage = 'Login failed. Please check your username and password.';
        console.error('Login error:', loginError);
      }
    });
  }
}
