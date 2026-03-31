import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variables
  private baseUrl = environment.baseUrl;
  protected token = signal<string | null>(localStorage.getItem('token') || null);

  //injections
  private http = inject(HttpClient);

  //methods

  constructor() { }

  //https://localhost:7035/api/Auth/login
  logIn(model: any){
    this.http.post(`${this.baseUrl}Auth/login`, model).pipe(
      tap(response=>{
        const res = response as any;
        this.token.set(res.token);
        localStorage.setItem('token', res.token);
      })
    )
  }
}
