import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestFormComponent } from './fiest-form.component';

describe('FiestFormComponent', () => {
  let component: FiestFormComponent;
  let fixture: ComponentFixture<FiestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
