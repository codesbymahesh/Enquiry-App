import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private usernameSubject = new BehaviorSubject<string>(this.getStoredUsername());
  public username$ = this.usernameSubject.asObservable();

  constructor(private router: Router) {}

  private checkLoginStatus(): boolean {
    return !!localStorage.getItem('enuiryApp');
  }

  private getStoredUsername(): string {
    return localStorage.getItem('username') || '';
  }

  setUsername(username: string): void {
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);
  }

  setLoggedIn(): void {
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('enuiryApp');
    localStorage.removeItem('username');
    this.isLoggedInSubject.next(false);
    this.usernameSubject.next('');
    this.router.navigateByUrl('/login');
  }

  getUsername(): string {
    return this.getStoredUsername();
  }

  isLoggedIn(): boolean {
    return this.checkLoginStatus();
  }
}
