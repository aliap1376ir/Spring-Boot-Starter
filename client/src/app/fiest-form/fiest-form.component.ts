import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fiest-form',
  templateUrl: './fiest-form.component.html',
  styleUrls: ['./fiest-form.component.css'],
})
export class FiestFormComponent implements OnInit {
  nameP: string = '';
  ageP: number = 0;
  naghiMamouli: string = '';

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  form: FormGroup = this._formBuilder.group({
    nameC: ['', Validators.required],
    ageC: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit() {
    let path: string =
      'http://127.0.0.1:7777/helloV2/' + this.nameP + '/' + this.ageP;
    this.http.get(path, { responseType: 'text' }).subscribe(
      (data) => {
        this.naghiMamouli = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
