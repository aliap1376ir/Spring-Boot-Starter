import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Person } from 'src/app/service/models';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  person: Person = { name: '', username: '', id: 0 };

  constructor(
    private _formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  form: FormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit() {
    this.api.newPerson(this.person).subscribe((newPerson) => {
      alert(newPerson.username + ' was successfully added.');
      this.person = { name: '', username: '', id: 0 };
    });
  }

  goTochatRoom() {
    this.router.navigateByUrl('/chat');
  }
}
