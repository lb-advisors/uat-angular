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
    console.log('Token saved:', token); // Debug: Log saved token
  }

  // Retrieve the token (from sessionStorage first, then fallback to localStorage)
  getToken(): string | null {
    const token = sessionStorage.getItem(this.tokenKey) || localStorage.getItem(this.tokenKey);
    console.log('Retrieved token:', token); // Debug: Log retrieved token
    return token;
  }

  // Clear the token from both storages (useful for logout)
  clearToken(): void {
    sessionStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.tokenKey);
    console.log('Token cleared'); // Debug: Confirm token clearance
  }

  // Check if token exists and is not expired
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) {
      console.warn('No token found');
      return false;
    }

    const payload = this.decodeToken(token);
    if (!payload || !payload.exp) {
      console.warn('Invalid token payload');
      return false;
    }

    const expiryTime = payload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    const isValid = currentTime < expiryTime;
    console.log('Token validity:', isValid); // Debug: Log token validity
    return isValid;
  }

  // Decode the token to get its payload
  private decodeToken(token: string): any | null {
    try {
      const payloadPart = token.split('.')[1];
      const decodedPayload = atob(payloadPart);
      const parsedPayload = JSON.parse(decodedPayload);
      console.log('Decoded token payload:', parsedPayload); // Debug: Log decoded payload
      return parsedPayload;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }
}
