import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormShellComponent } from './user-form-shell.component';

describe('UserFormShellComponent', () => {
  let component: UserFormShellComponent;
  let fixture: ComponentFixture<UserFormShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
