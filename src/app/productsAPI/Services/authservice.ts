// src/app/services/auth.service.ts

import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse, Loginrequest, } from '../interfaces/auth';
import { isPlatformBrowser } from '@angular/common';
import { API_URLS } from '../constants/APi_URLS';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN_KEY = 'access_token';
   platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) {}

  login(data: Loginrequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(API_URLS.login, data)
      .pipe(
        tap((response) => {
           this.saveToken(response.access_token);
        })
      );
  }

   saveToken(keyValue:string){
    localStorage.setItem(this.TOKEN_KEY,keyValue);

     }
      getToken(): string | null {

    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('access_token');
    }

    return null;
  }


  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

   
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}