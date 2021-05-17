import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Person } from 'src/app/service/models';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];
  // people: Person[] = [
  //   { id: 1, name: 'ali', username: '110' },
  //   { id: 2, name: 'ali', username: '110' },
  //   { id: 3, name: 'ali', username: '110' },
  // ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.api.getPeople().subscribe(
      (people) => {
        this.people = people;
      },
      (errrrrrrr) => {}
    );
  }
}
