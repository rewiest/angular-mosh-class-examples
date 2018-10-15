import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwFormComponent } from './change-pw-form.component';

describe('ChangePwFormComponent', () => {
  let component: ChangePwFormComponent;
  let fixture: ComponentFixture<ChangePwFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
