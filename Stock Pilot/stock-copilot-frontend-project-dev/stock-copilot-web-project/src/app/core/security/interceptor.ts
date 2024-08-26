import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../provides/account/account';
import { WHITE_LIST } from './whilte-list';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private account: Account) {

  }

  /**
   * @param WHITE_LIST içinde olan url'lerde header'da token göndermiyoruz 
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isNonAuthUrl = WHITE_LIST.some(url => request.url.includes(url));

    const headers = isNonAuthUrl ?
      new HttpHeaders({
        'Content-Type': 'application/json'
      }) : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.account.token}`
      });

    const modifiedRequest = request.clone({ headers });

    // Değiştirilmiş isteği devam ettiriyoruz
    return next.handle(modifiedRequest);
  }
}
