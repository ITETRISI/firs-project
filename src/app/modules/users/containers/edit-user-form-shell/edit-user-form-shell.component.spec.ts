import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserFormShellComponent } from './edit-user-form-shell.component';

describe('EditUserFormShellComponent', () => {
  let component: EditUserFormShellComponent;
  let fixture: ComponentFixture<EditUserFormShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserFormShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserFormShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
