import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AtmService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}
  // url = 'http://localhost:8080/harish';
  url: any;
  mainUrl = 'http://192.168.5.101:1234/rbi/getbank';

  setUrl(url: any) {
    this.url = url;
  }

  checkBank(cardNumber: any): Observable<any> {
    return this.http.get<any>(`${this.mainUrl}/${cardNumber}`);
  }
  verifyCardNumber(cardNumber: any): Observable<any> {
    return this.http.get<any>(`http://${this.url}/checkifexists/${cardNumber}`);
  }

  verifyPin(cardNumber: any, pin: any): Observable<any> {
    return this.http.post<any>(`http://${this.url}/verify`, {
      cardNumber,
      pin,
    });
  }

  getBalance(cardNumber: any): Observable<any> {
    return this.http.get<any>(
      `http://${this.url}/getbalance/${this.localStorage.getItem('cardNumber')}`
    );
  }

  deposit(cardNumber: any, pin: any, amount: any): Observable<any> {
    return this.http.post<any>(`http://${this.url}/depositamount`, {
      cardNumber,
      pin,
      amount,
    });
  }
  withdraw(cardNumber: any, pin: any, amount: any): Observable<any> {
    return this.http.post<any>(`http://${this.url}/withdrawamount`, {
      cardNumber,
      pin,
      amount,
    });
  }

  sendOtp(cardNumber: any): Observable<any> {
    return this.http.post<any>(
      `http://${this.url}/generatepin/${this.localStorage.getItem(
        'cardNumber'
      )}`,
      {
        cardNumber,
      }
    );
  }

  changePin(cardNumber: any, pin: any): Observable<any> {
    return this.http.post<any>(`http://${this.url}/generatepin`, {
      cardNumber,
      pin,
    });
  }
}
