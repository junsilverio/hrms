import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'hrms_token';
  private readonly authState = new BehaviorSubject<boolean>(this.hasToken());

  readonly isAuthenticated$ = this.authState.asObservable();

  login(email: string, password: string): boolean {
    const isValid = email === 'admin@hrms.com' && password === 'admin123';

    if (isValid) {
      localStorage.setItem(this.storageKey, 'hrms-demo-token');
      this.authState.next(true);
    }

    return isValid;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.authState.next(false);
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }

  private hasToken(): boolean {
    return typeof localStorage !== 'undefined' && !!localStorage.getItem(this.storageKey);
  }
}
