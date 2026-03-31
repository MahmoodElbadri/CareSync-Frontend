import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AuthResponseDto } from '../models/auth-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variables
  private baseUrl = environment.baseUrl;
  public token = signal<string | null>(localStorage.getItem('token') || null);
  public isLoggedIn = computed(() => this.token() !== null);
  public role = signal<string | null>(localStorage.getItem('role') || null);
  public isAdmin = computed(() => this.role() === 'Admin');
  public isDoctor = computed(() => this.role() === 'Doctor');
  public isPatient = computed(() => this.role() === 'Patient');
  public userName = signal<string | null>(localStorage.getItem('userName') || null);
  public email = signal<string | null>(localStorage.getItem('email') || null);

  //injections
  private http = inject(HttpClient);

  //methods

  constructor() { }

  //https://localhost:7035/api/Auth/login
  login(model: any){
   return this.http.post<AuthResponseDto>(`${this.baseUrl}Auth/login`, model).pipe(
      tap(response=>{
        this.token.set(response.token);
        localStorage.setItem('token', response.token);
        this.role.set(response.role[0]);
        localStorage.setItem('role', response.role[0]);
        this.userName.set(response.fullName);
        localStorage.setItem('userName', response.fullName);
        this.email.set(response.email);
        localStorage.setItem('email', response.email);
      })
    )
  }
  
  //i didn't use it
  jwtDecode(token: string){
    return JSON.parse(atob(token.split('.')[1]));
  }

  logout(){
    this.token.set(null);
    localStorage.removeItem('token');
    this.role.set(null);
    localStorage.removeItem('role');
    this.userName.set(null);
    localStorage.removeItem('userName');
    this.email.set(null);
    localStorage.removeItem('email');
  }
}
