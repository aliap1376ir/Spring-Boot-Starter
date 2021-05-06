import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  urlProtocol = 'http';
  // urlHost = '127.0.0.1'; //local host
  urlHost = '192.168.1.40'; //local host
  urlPort = '7777';

  url = this.urlProtocol + '://' + this.urlHost + ':' + this.urlPort + '/';

  submit(nameP: string, ageP?: number) {
    let path: string = this.url + 'helloV2/' + nameP + '/' + ageP;
    return this.http.get(path, { responseType: 'text' });
  }
}
