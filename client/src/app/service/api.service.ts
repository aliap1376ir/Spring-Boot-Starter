import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  urlProtocol = 'http';
  // urlHost = '127.0.0.1'; //local host
  // urlHost = '192.168.1.40'; //local host
  urlHost = '192.168.1.27'; //local host
  urlPort = '7777';

  url = this.urlProtocol + '://' + this.urlHost + ':' + this.urlPort + '/';

  helloPersonNameGetParameter(name: string) {
    let path = this.url + '/hello';
    let params: HttpParams = new HttpParams();
    params = params.append('personName', name);
    return this.http.get(path, { responseType: 'text', params: params });
  }

  submit(nameP: string, ageP?: number) {
    let path: string = this.url + 'helloV2/' + nameP + '/' + ageP;
    return this.http.get(path, { responseType: 'text' });
  }

  newPerson(person: Person) {
    let path: string = this.url + '/api/person/new';
    return this.http.post<Person>(path, person);
  }

  getPeople() {
    let path: string = this.url + '/api/person/all';
    return this.http.get<Person[]>(path);
  }
}
