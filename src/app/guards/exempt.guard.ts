import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExemptGuard implements CanActivate {

  // Define path segments to exempt from authentication
  private exemptSegments = ['order-form', 'order-exists', 'order-confirmation'];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentPath = state.url; // Get the URL of the current route

    // Check if any exempt segment is in the route path
    const isExempt = this.exemptSegments.some(segment => currentPath.includes(segment));
    console.log(`ExemptGuard: Checking if path is exempt -> ${currentPath}, Exempt: ${isExempt}`);
    
    return isExempt;
  }
}
