import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-fiest-form',
  templateUrl: './fiest-form.component.html',
  styleUrls: ['./fiest-form.component.css'],
})
export class FiestFormComponent implements OnInit {
  nameP: string = '';
  ageP: number = 0;
  naghiMamouli: string = '';

  constructor(private _formBuilder: FormBuilder, private api: ApiService) {}

  form: FormGroup = this._formBuilder.group({
    nameC: ['', Validators.required],
    ageC: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit() {
    this.api.submit(this.nameP, this.ageP).subscribe(
      (data) => {
        this.naghiMamouli = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
