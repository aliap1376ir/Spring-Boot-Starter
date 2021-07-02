import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcsExampleComponent } from './ccs-example.component';

describe('CcsExampleComponent', () => {
  let component: CcsExampleComponent;
  let fixture: ComponentFixture<CcsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
