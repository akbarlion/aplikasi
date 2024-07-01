import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;
  rpt_code: string;

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  login(username: string, password: string, key: string) {
    return new Promise<any>((resolve, reject) => {
      const requestBody = {
        USERNAME: username,
        PASSWORD: password,
        'X-API-KEY': key
      }
      this.isLogin = true;
      localStorage.setItem('isLoggedIn', 'true');
      return this.http.post<any>(environment.url + `login`, requestBody).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/auth/login']);
  }

  isLoggedin() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  get_rpt_code() {
    this.rpt_code = localStorage.getItem('rpt_code');
    return this.rpt_code;
  }
}
