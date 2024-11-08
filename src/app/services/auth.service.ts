import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor() {}

  // Save the token to both sessionStorage and localStorage
  saveToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the token (from sessionStorage first, then fallback to localStorage)
  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey) || localStorage.getItem(this.tokenKey);
  }

  // Clear the token from both storages (useful for logout)
  clearToken(): void {
    sessionStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.tokenKey);
  }
}
