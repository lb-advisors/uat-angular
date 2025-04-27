import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model ';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private fullnameKey = 'fullname';
  private usernameKey = 'username'; // New key for storing username

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/public/auth/login`, { username, password });
  }

  passwordRequest(username: string): Observable<unknown> {
    return this.http.post<unknown>(`${environment.apiUrl}/public/auth/password-request`, { username });
  }

  passwordReset(password: string, token: string): Observable<unknown> {
    return this.http.post<unknown>(`${environment.apiUrl}/public/auth/password-reset`, { password, token });
  }

  saveFullnameAndToken(fullname: string, token: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.fullnameKey, fullname);
  }

  // Save username to localStorage
  saveUsername(username: string): void {
    // Make sure to store the full email address
    localStorage.setItem(this.usernameKey, username);
  }

  // Retrieve the token (from localStorage)
  getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    return token;
  }

  getFullname(): string | null {
    const token = localStorage.getItem(this.fullnameKey);
    return token;
  }

  // New method to get username
  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }

  // Get the first part of the email (before @)
  getUsernamePrefix(): string | null {
    const username = this.getUsername();
    if (!username) return null;
    
    return username.split('@')[0];
  }

  // Check if the user is logged in by verifying if a token exists
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  // Optional: method to log out
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.fullnameKey);
    localStorage.removeItem(this.usernameKey); // Also clear username
    this.router.navigate(['/login']);
  }
}