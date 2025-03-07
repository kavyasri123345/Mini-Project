import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  // Method to check authentication status
  isAuthenticatedStatus(): boolean {
    return this.isAuthenticated;
  }

  // Method to log in
  login(username: string, password: string): boolean {
    // Dummy authentication logic (replace with API call if needed)
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'dummy-token'); // Store token
      return true;
    }
    return false;
  }

  // Method to log out
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token'); // Remove token
  }
}
