import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  get isAuthenticated$() {
    return this.auth.isAuthenticated$;
  }

  get user$() {
    return this.auth.user$;
  }
}
