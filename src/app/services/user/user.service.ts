import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignUpUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { environments } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environments.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  sigupUser(requestDatas: SignUpUserRequest): Observable<SignUpUserResponse> {
    return this.http.post<SignUpUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }

  isLoggedIn(): boolean {
    const JWT_TOKEN = this.cookie.get('USER_INFO');
    return JWT_TOKEN ? true : false;
  }
}
