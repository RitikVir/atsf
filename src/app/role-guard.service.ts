import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(public authService: AuthService, public route: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('token');
    console.log(token, expectedRole);
    const tokenPayLoad = helper.decodeToken(token);

    if (
      !(
        this.authService.isAuthenticated() && tokenPayLoad.role === expectedRole
      )
    ) {
      this.route.navigate(['/login']);
      return false;
    }
    return true;
  }
}
