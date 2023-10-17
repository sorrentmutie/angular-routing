import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(false).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = false)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
